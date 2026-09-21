import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiArrowRight, FiLoader } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Login() {
  const { user, login, googleSignIn, redirectError, getAuthErrorMessage } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  useEffect(() => {
    if (redirectError) setError(getAuthErrorMessage(redirectError));
  }, [redirectError, getAuthErrorMessage]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter both your email address and password.");
      return;
    }

    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-amber-500/50 focus:bg-white/[0.07]";

  return (
    <section className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-700/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[420px]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
          <div className="flex flex-col items-center">
            <img src={logo} alt="Apex Horizon" className="h-16 w-16 object-contain" />
            <h1 className="mt-5 font-[Cormorant_Garamond] text-3xl font-semibold text-white">Welcome Back</h1>
            <p className="mt-2 text-sm text-zinc-400">Sign in to access your premium dashboard</p>
          </div>

          {error && (
            <div className="mt-5 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-xs text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-zinc-500">Email Address</label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
            </div>

            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-zinc-500">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" required value={form.password} onChange={handleChange} placeholder="••••••••" className={inputClass + " pr-11"} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-zinc-300">
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button type="button" className="text-xs text-zinc-400 transition hover:text-white">Forgot password?</button>
            </div>

            <motion.button whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: loading ? 1 : 0.98 }} type="submit" disabled={loading}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <FiLoader size={16} className="animate-spin" /> : <>Sign In <FiArrowRight size={16} /></>}
            </motion.button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-widest text-zinc-600">or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="mt-6 flex gap-3">
            <button type="button" onClick={handleGoogle} disabled={loading}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:opacity-50">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-white underline underline-offset-4 transition hover:text-amber-400">Create one</Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
