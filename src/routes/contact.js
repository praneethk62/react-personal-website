import React from 'react'

const contact = () => {
  return (
    <div>
      {" "}
      <div className="formgape">
        <h2>
          <u>Contact Me</u>
        </h2>

        {/* <a name="contactme" /> */}
        <form
          id="formsubmit"
          action="personal.html"
          method="get"
          onsubmit="return ValidationEvent()"
        >
          <div>Fullname</div>
          <div>
            <input
              type="text"
              className="fullname"
              name="fullname"
              placeholder="fullname"
            />
          </div>
          <div class="divcolor" id="fullnamediv"></div>
          <div>Email</div>
          <div>
            {" "}
            <input
              type="email"
              className="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div class="divcolor" id="emaildiv"></div>
          <div>Phone no</div>
          <div>
            <input
              type="number"
              className="phoneno"
              name="phoneno"
              placeholder="phone no"
            />
          </div>
          <div class="divcolor" id="phonenodiv"></div>
          <input
            class="sub"
            type="submit"
            value="submit"
            onclick="return validate()"
          />
        </form>
      </div>
    </div>
  );
}

export default contact