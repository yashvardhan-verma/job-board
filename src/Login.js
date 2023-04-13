import "./style/login.css";

export default function Login() {
  return (
    <div className="App container">
      <h2> Login </h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-end ">
            <a href="/forgot">
              <b> Forgot your password? </b>
            </a>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember me
          </label>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="register-account text-center">
        New to MyJobs? <a href="register"> Create an account </a>
      </div>
    </div>
  );
}
