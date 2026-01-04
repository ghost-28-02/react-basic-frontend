import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup({setIsLoggedIn}) {

  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    role:"student",
    email:"",
    password:"",
    confirmPassword:""
  })

  function changeHandler(event){

    const { name, value } = event.target;
     
    setFormData((prev) =>({
      ...prev,
      [name] : value
    }))
  }

  function handleSubmit(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Password do not match");
    }
    else{
      toast.success("Account created succefully"); 
      setIsLoggedIn(true);
      navigate("/dashboard");

    }
    
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* student-instructor botton */}

      <div className="flex bg-white border border-secondary/30 rounded-md overflow-hidden w-fit">
        <button
          type="button"
          onClick={() => {
            setRole("student");
            setFormData((prev) => ({ ...prev, role: "student" }));
          }}
          className={`px-6 py-2 font-semibold transition ${role === "student" ? "bg-secondary text-white" : "text-primary hover:bg-secondary/10"}`}
        >
          Student
        </button>

        <button
          type="button"
          name="role"
          onClick={() => {
            setRole("instructor");
            setFormData((prev) => ({ ...prev, role: "instructor" }));
          }}
          className={`px-6 py-2 font-semibold transition ${ role === "instructor" ? "bg-secondary text-white" : "text-primary hover:bg-secondary/10"}`}
        >
          Instructor
        </button>
      </div>



      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Enter first name"
            className="w-full px-4 py-2 bg-white border border-secondary/30 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Enter last name"
            className="w-full px-4 py-2 bg-white border border-secondary/30 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      {/* Email Field */}
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
          className="w-full px-4 py-2 bg-white border border-secondary/30 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Create Password<span className="text-red-500">*</span>
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
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 bg-white border border-secondary/30 rounded-md text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary pr-10"
            />
            <button
              type="button"
              onClick={()=> setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-secondary"
            >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}  
            </button>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full py-2 bg-secondary text-white font-semibold rounded-md hover:bg-primary transition">
        Create Account
      </button>
      
    </form>
  );
}