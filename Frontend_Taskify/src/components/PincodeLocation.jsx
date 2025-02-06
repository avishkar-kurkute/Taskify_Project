import React, { useState } from "react";

const PincodeLocation = ({ setAddressDetails, addressDetails }) => {
  const [pincode, setPincode] = useState(addressDetails.pincode);

  const handlePincodeChange = (e) => {
    const inputPincode = e.target.value;
    setPincode(inputPincode);

    // Fetch city, state based on pincode
    if (inputPincode.length === 6) {
      fetch(`https://api.postalpincode.in/pincode/${inputPincode}`)
        .then((res) => res.json())
        .then((data) => {
          if (data[0].Status === "Success") {
            const { District, State } = data[0].PostOffice[0];
            setAddressDetails({
              ...addressDetails,
              pincode: inputPincode,
              city: District,
              state: State,
            });
          } else {
            alert("Invalid Pincode");
          }
        });
    }
  };

  return (
    <div className="address-section">
      <div className="form-group">
        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          id="pincode"
          value={pincode}
          onChange={handlePincodeChange}
          placeholder="Enter Pincode"
          maxLength="6"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="houseName">House Name / Building Name</label>
        <input
          type="text"
          id="houseName"
          value={addressDetails.houseName}
          onChange={(e) =>
            setAddressDetails({
              ...addressDetails,
              houseName: e.target.value,
            })
          }
          placeholder="Enter House Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="streetName">Street Name</label>
        <input
          type="text"
          id="streetName"
          value={addressDetails.streetName}
          onChange={(e) =>
            setAddressDetails({
              ...addressDetails,
              streetName: e.target.value,
            })
          }
          placeholder="Enter Street Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="landmark">Landmark</label>
        <input
          type="text"
          id="landmark"
          value={addressDetails.landmark}
          onChange={(e) =>
            setAddressDetails({
              ...addressDetails,
              landmark: e.target.value,
            })
          }
          placeholder="Enter Landmark"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={addressDetails.city} disabled />
      </div>

      <div className="form-group">
        <label htmlFor="state">State</label>
        <input type="text" id="state" value={addressDetails.state} disabled />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={addressDetails.country}
          disabled
        />
      </div>
    </div>
  );
};

export default PincodeLocation;
