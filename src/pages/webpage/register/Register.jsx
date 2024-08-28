import React, { useState } from "react";
import "./style.css";
import signUpPic from "../../../assets/img/signup.png";
import ValidatedInput from "../../../components/textInput/ValidatedInput";
import ValidateSelect from "../../../components/selectInput/ValidateSelect";
import ValidateDatePicker from "../../../components/datePicker/ValidateDatePicker";
import ValidatePassword from "../../../components/passwordInput/ValidatePassword";
import ValidateButton from "../../../components/buttonInput/ValidateButton";
const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordsMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };
  const titleOptions = [
    { value: "", label: "Select Title" },
    { value: "mr", label: "Mr" },
    { value: "ms", label: "Ms" },
    { value: "mrs", label: "Mrs" },
    { value: "miss", label: "Miss" },
    { value: "none", label: "None" },
  ];
  const genderOptions = [
    { value: "", label: "Select gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer-not-to-say", label: "Prefer Not to Say" },
    { value: "none", label: "None" },
  ];
  return (
    <div className="screen">
      <div className="web-container register">
        <div className="register-left">
          <img src={signUpPic} alt="signUpPicture" />
        </div>
        <div className="register-right">
          <div className="registration-tile">
            <h2 className="reg" data-text="Registration...">
              Registration...
            </h2>
            <p>Registration here to be a member of our family.</p>
          </div>
          <form action="#" className="registration-form">
            <div className="reg-form-group">
              <div className="reg-form-component-title">
                <ValidateSelect
                  options={titleOptions}
                  label="Select Title"
                  errorMessage="Title cannot be empty."
                  requiredMessage="Please select an option"
                />
              </div>
              <div className="reg-form-component-name">
                <ValidatedInput
                  label="Enter your full name"
                  errorMessage="Full name must be at least 3 characters and contain only letters and spaces."
                  requiredMessage="Full name cannot be empty."
                />
              </div>
            </div>
            <div className="reg-form-group">
              <div className="reg-form-component">
                <ValidatedInput
                  label="Email"
                  errorMessage="Please enter a valid email address."
                  requiredMessage="Email cannot be empty."
                />
              </div>
              <div className="reg-form-component">
                <ValidatedInput
                  label="Username"
                  errorMessage="Username must be 3-15 characters long."
                  requiredMessage="Username cannot be empty."
                />
              </div>
            </div>
            <div className="reg-form-group">
              <div className="reg-form-component">
                <ValidateSelect
                  options={genderOptions}
                  label="Select Gender"
                  errorMessage="Title cannot be empty."
                  requiredMessage="Please select an option"
                />
              </div>
              <div className="reg-form-component">
                <ValidateDatePicker
                  label="Select your date of birth"
                  requiredMessage="Birth date cannot be empty."
                  errorMessage="Please insert a correct date."
                />
              </div>
            </div>
            <div className="reg-form-group">
              <div className="reg-form-component">
                <ValidatedInput
                  label="Full Address"
                  errorMessage="Address cannot be empty."
                  requiredMessage="Address cannot be empty."
                />
              </div>
              <div className="reg-form-component">
                <ValidatedInput
                  label="Occupation"
                  errorMessage="Occupation cannot be empty."
                  requiredMessage="Occupation cannot be empty."
                />
              </div>
            </div>
            <div className="reg-form-group">
              <div className="reg-form-component">
                <ValidatePassword
                  label="Enter Main Password"
                  value={password}
                  setValue={handlePasswordChange}
                  errorMessage="Passwords do not match."
                  requiredMessage="Password cannot be empty."
                  passwordsMatch={passwordsMatch && password.length > 0}
                  showMismatchError={
                    !passwordsMatch && confirmPassword.length > 0
                  }
                />
              </div>
              <div className="reg-form-component">
                <ValidatePassword
                  label="Confirm Password"
                  value={confirmPassword}
                  setValue={handleConfirmPasswordChange}
                  originalPassword={password}
                  errorMessage="Passwords do not match."
                  requiredMessage="Password cannot be empty."
                  passwordsMatch={passwordsMatch && confirmPassword.length > 0}
                  showMismatchError={
                    !passwordsMatch && confirmPassword.length > 0
                  }
                />
              </div>
            </div>
            <div className="reg-form-component-btn">
              <div className="reg-form-button">
                <ValidateButton text="Registration" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
