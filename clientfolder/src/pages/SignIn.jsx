import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";


const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    // with using ...formData we keep the values of respective input even we are on the other i/p
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log("FormData", formData);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false ){
        setLoading(false);
        setError(data.message);
        return;
      } 
      setLoading(false);
      setError(null);
      navigate('/')
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.log("error", err);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'loading...':'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p> Dont Have an account ?</p>
        <Link to="/sign-up">
          <span className="text-blue-700 hover:opacity-95">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p> }
    </div>
  );
};

export default SignIn;
