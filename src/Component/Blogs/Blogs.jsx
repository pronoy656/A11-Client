import React from "react";

const Blogs = () => {
  return (
    <div className="mt-11">
      <h1 className="text-center mt-4 text-3xl font-semibold">
        Your Question goes here ?
      </h1>
      <div className="flex mt-6 mb-20">
        <div className="flex justify-center w-1/2">
          <img
            className="w-[700px] h-[450px]"
            src="https://i.ibb.co/WBdnfsm/80-c-G9sa-WNl-X3dvcmst-MDM.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 border">
          <h1 className="  text-3xl font-semibold">
            What is an access token and refresh token?
          </h1>
          <h1>
            The access token is used to authenticate API requests to access
            protected resources, while the refresh token is used to obtain new
            access tokens once the current ones expire.
          </h1>
          <h1 className=" mt-6 text-3xl font-semibold">
            {" "}
            How do they work and where should we store them on the client side?
          </h1>
          <h1>
            Access Token: When a user logs in or authorizes a client
            application, the authentication server issues an access token. This
            token contains information about the user's identity and the
            permissions granted to the client application. The client
            application includes this access token in the headers of its
            requests to access protected resources on behalf of the user. The
            server verifies the access token to ensure that the user has the
            necessary permissions to access the requested resources.
          </h1>
          <h1>
            Refresh Token: Along with the access token, the authentication
            server also issues a refresh token during the initial authentication
            process. The refresh token is securely stored on the client side.
            When the access token expires (due to its short lifespan), the
            client application can use the refresh token to request a new access
            token from the authentication server without requiring the user to
            log in again. This process is transparent to the user and helps
            maintain user sessions without frequent reauthentication.
          </h1>
          <h1 className=" mt-6 text-3xl font-semibold">
            {" "}
            What is express js?{" "}
          </h1>
          <h1>
            Express.js is the most popular web framework for Node.js. It is
            designed for building web applications and APIs and has been called
            the de facto standard server framework for Node.js.
          </h1>

          <h1 className=" mt-6 text-3xl font-semibold">What is Nest JS </h1>
          <h1>
            {" "}
            Nest NestJS is a framework for building efficient, scalable Node.js
            server-side applications. It uses progressive JavaScript, is built
            with and fully supports TypeScript yet still enables developers to
            code in pure JavaScript and combines elements of OOP bject Oriented
            Programming, FP Functional Programming, and FRP Functional Reactive
            Programming.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
