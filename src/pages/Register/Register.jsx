import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Result } from "postcss";


const Register = () => {
const {createUser} = useContext(AuthContext)


    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password =form.get('password')
        console.log(name, photo, email, password);


        //create user;
        createUser(email,password)
        .then(Result=>{
            console.log(Result);
        })
        .catch(error => {
            console.log(error);
        })

    }


    return (
        <div>
            <Navbar></Navbar>
      <h2 className="text-3xl text-center mt-10 font-semibold">Register now</h2>
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center mb-7">Already have an account? <Link className="text-blue-500 font-semibold underline" to='/login'>Register</Link></p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;