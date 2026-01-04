import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login({setIsLoggedIn}) {

  const [formData, setFormData] = useState({
    email:"",password:""
  })

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event){
     
    setFormData((prev) =>({
      ...prev,
      [event.target.name] : event.target.value
    }))
  }

  function handleSubmit(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold mb-1">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
          className="w-full px-4 py-2 bg-white border border-secondary/30 rounded-md text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">
          Password<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler} 
            placeholder="Enter Password"
            className="w-full px-4 py-2 bg-white border border-secondary/30 rounded-md text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary pr-10"
          />
          <button
            type="button"
            onClick={()=> setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-secondary"
          >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}  
          </button>
        </div>
        <div className="text-right mt-1">
          <a href="#" className="text-secondary text-sm hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      <button className="w-full py-2 bg-secondary text-white font-semibold rounded-md hover:bg-primary transition">
        Sign In
      </button>
      
    </form>
  );
}