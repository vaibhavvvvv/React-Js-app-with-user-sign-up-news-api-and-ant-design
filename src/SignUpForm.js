import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, DatePicker, Form, Input, message, Select } from "antd"

import "./SignUpForm.css"
import "./App.css"

const SignUpForm = () => {
  const navigate = useNavigate()

  return (
    <div className="SignUpForm">
      <header className="App-header">
        <h1 className="sign-up-title">News App</h1>
        <Form
          className="sign-up-form"
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 15 }}
          onFinish={(values) => {
            console.log({ values })
            message.success("Sign Up Successful")
            navigate("./NewPage")

            //  history.push("/newpage")
          }}
          onFinishFailed={(error) => {
            console.log({ error })
          }}
        >
          <Form.Item
            name="userName"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please Enter Your Name",
              },
              {
                whitespace: true,
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Your Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please Enter Your Email",
              },
              {
                type: "email",
                message: "Please Enter Valid Email",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Your Email Id" />
          </Form.Item>

          <Form.Item
            name="number"
            label="Number"
            rules={[
              {
                required: true,
                message: "Please Enter Your Phone Number",
              },

              {
                pattern: /^\d{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
              // {
              //   validator: (_, value) =>
              //     value && value.includes("1")
              //       ? Promise.resolve()
              //       : Promise.reject("Enter only numbers"),
              // },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Your Phone number" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please Enter Your Address",
              },
              {
                whitespace: true,
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Your Address" />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select Your Gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            label="Date Of Birth"
            rules={[
              {
                required: true,
                message: "Please Select Your Date Of Birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100% " }}
              picker="date"
              placeholder="Select Date Of Birth"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please Enter Your Password",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message:
                  "Password must contain at least one letter and one number, and no special characters!",
              },
              // {
              //   validator: (_, value) =>
              //     value && value.includes("A")
              //       ? Promise.resolve()
              //       : Promise.reject("Password must have atleast 1 alphabet."),
              // },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject("Both Passwords Do Not Match")
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 25 }}>
            <Button block type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default SignUpForm
