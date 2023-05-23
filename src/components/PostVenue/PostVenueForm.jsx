import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PostVenueAPICall from "./PostVenueAPICall";
import { FormContainer, FormFields } from "./PostVenueForm.style";
import { Sh1Title, Sinput, Stextarea } from "../styles/globalstyles";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter a name").max(100, "No more than 20 characters"),
  description: Yup.string().required("Please enter a description").max(800, "No more than 300 characters"),
  media: Yup.string().required("Please enter the image URL"),
  price: Yup.number().typeError("Please enter the price").required("Price must be a number"),
  maxGuests: Yup.number().typeError("Please enter the maximum number of guests").required(),
  rating: Yup.number(),
  meta: Yup.object().shape({
    wifi: Yup.boolean(),
    parking: Yup.boolean(),
    breakfast: Yup.boolean(),
    pets: Yup.boolean(),
  }),
  location: Yup.object().shape({
    address: Yup.string(),
    city: Yup.string(),
    zip: Yup.string(),
    country: Yup.string(),
    continent: Yup.string(),
    lat: Yup.number(),
    lng: Yup.number(),
  }),
});

export default function PostVenueForm() {
  const [formData, setformData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    formData.price = parseFloat(formData.price);
    formData.maxGuests = parseFloat(formData.maxGuests);
    formData.media = [formData.media];
    setFormSubmitted(true);
    /* console.log(formData); */
    setformData(formData);
  };

  /* console.log(formSubmitted); */

  return (
    <div>
      <FormContainer>
        <div>
          <Sh1Title>Add new venue</Sh1Title>
        </div>
        <FormFields>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <Sinput type="text" placeholder="Venue name" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}

            <label>Description:</label>
            <Stextarea type="text" rows="6" placeholder="Description" {...register("description")} />
            {errors.description && <span>{errors.description.message}</span>}

            <label>Cover picture URL:</label>
            <Sinput type="text" placeholder="Cover picture URL" {...register("media")} />
            {errors.media && <span>{errors.media.message}</span>}

            <label>Price per night:</label>
            <Sinput type="number" placeholder="8" min="0" {...register("price")} />
            {errors.price && <span>{errors.price.message}</span>}

            <label>Maximum guests:</label>
            <Sinput type="number" min="1" {...register("maxGuests")} />
            {errors.maxGuests && <span>{errors.maxGuests.message}</span>}

            <label htmlFor="pets">Pets</label>
            <input type="checkbox" {...register("meta.pets")} />

            <label htmlFor="breakfast">Breakfast</label>
            <input type="checkbox" {...register("meta.breakfast")} />

            <label htmlFor="breakfast">Wifi</label>
            <input type="checkbox" {...register("meta.wifi")} />

            <label htmlFor="parking">Parking</label>
            <input type="checkbox" {...register("meta.parking")} />

            <label htmlFor="address">Address</label>
            <Sinput type="text" placeholder="Address" {...register("location.address")} />

            <label htmlFor="city">City</label>
            <Sinput type="text" placeholder="City" {...register("location.city")} />

            <label htmlFor="country">Country</label>
            <Sinput type="text" placeholder="Country" {...register("location.country")} />

            <button type="submit">Submit</button>
            <Link to="/home">Back</Link>
          </form>
        </FormFields>
        <div>{formSubmitted && <PostVenueAPICall formData={formData} />}</div>
      </FormContainer>
    </div>
  );
}
