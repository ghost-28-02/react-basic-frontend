import React, { useState } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event){
    const {type,value,name,checked} = event.target;

    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name] : type === "checkbox" ? checked : value
        }
    })

  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
    
  }


  return (
    <form
      onSubmit={submitHandler}
      className="max-w-2xl mx-auto mt-10 p-8 border rounded-lg shadow-md flex flex-col gap-6"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            onChange={changeHandler}
            value={formData.firstName}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            onChange={changeHandler}
            value={formData.lastName}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          className="mt-1 w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          name="country"
          onChange={changeHandler}
          value={formData.country}
          className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white appearance-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
>
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Australia</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Street address
        </label>
        <input
          type="text"
          name="street"
          onChange={changeHandler}
          value={formData.street}
          className="mt-1 w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            onChange={changeHandler}
            value={formData.city}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            State / Province
          </label>
          <input
            type="text"
            name="state"
            onChange={changeHandler}
            value={formData.state}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            ZIP / Postal code
          </label>
          <input
            type="text"
            name="zip"
            onChange={changeHandler}
            value={formData.zip}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Email Notifications */}
      <div>
        <h3 className="font-semibold">By Email</h3>
        <div className="mt-2 flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <span>
              <span className="font-medium">Comments</span> - Get notified when
              someone posts a comment on a posting.
            </span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <span>
              <span className="font-medium">Candidates</span> - Get notified
              when a candidate applies for a job.
            </span>
          </label>

          <label className="flex items-center gap-2 ">
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <span>
              <span className="font-medium">Offers</span> - Get notified when a
              candidate accepts or rejects an offer.
            </span>
          </label>
        </div>
      </div>

      {/* Push Notifications */}
      <div>
        <h3 className="font-semibold">Push Notifications</h3>
        <p className="text-sm text-gray-500 mb-2">
          These are delivered via SMS to your mobile phone.
        </p>

        <div className="flex flex-col gap-1">
          <label>
            <input
              type="radio"
              name="pushNotification"
              value="everything"
              checked={formData.pushNotification === "everything"}
              onChange={changeHandler}
            />{" "}
            Everything
          </label>

          <label>
            <input
              type="radio"
              name="pushNotification"
              value="same as email"
              checked={formData.pushNotification === "same as email"}
              onChange={changeHandler}
            />{" "}
            Same as email
          </label>

          <label>
            <input
              type="radio"
              name="pushNotification"
              value="no push notifications"
              checked={formData.pushNotification === "no push notifications"}
              onChange={changeHandler}
            />{" "}
            No push notifications
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Save
      </button>
    </form>
  );
}