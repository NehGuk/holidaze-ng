import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import UpdateVenueAPICall from "./UpdateVenueAPICall";

import { FormContainer, FormFields } from "./UpdateVenueForm.style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";

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

export default function UpdateVenueForm() {
  const [formData, setformData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { id } = useParams();

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

  // API CALL FOR PRE-FILLING THE FORM
  console.log(`HEREEEE: ${api_endpoints(null, id).getVenue}`);

  const { data } = useApi(api_endpoints(null, id).getVenue);
  console.log(data);

  // API CALL FOR PRE-FILLING THE FORM END

  return (
    <div>
      {data.media !== undefined && (
        <>
          <FormContainer>
            <div>
              <h1>Update venue</h1>
            </div>
            <FormFields>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input type="text" defaultValue={data.name} {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}

                <label>Description:</label>
                <textarea type="text" defaultValue={data.description} {...register("description")} />
                {errors.description && <span>{errors.description.message}</span>}

                <label>Media:</label>
                <input type="text" defaultValue={data.media[0]} {...register("media")} />
                {errors.media && <span>{errors.media.message}</span>}

                <label>Price:</label>
                <input type="number" defaultValue={data.price} {...register("price")} />
                {errors.price && <span>{errors.price.message}</span>}

                <label>Max Guests:</label>
                <input type="number" defaultValue={data.maxGuests} {...register("maxGuests")} />
                {errors.maxGuests && <span>{errors.maxGuests.message}</span>}

                <label htmlFor="pets">Pets</label>
                <input type="checkbox" defaultChecked={data.meta.pets} {...register("meta.pets")} />

                <label htmlFor="breakfast">Breakfast</label>
                <input type="checkbox" defaultChecked={data.meta.breakfast} {...register("meta.breakfast")} />

                <label htmlFor="breakfast">Wifi</label>
                <input type="checkbox" defaultChecked={data.meta.wifi} {...register("meta.wifi")} />

                <label htmlFor="parking">Parking</label>
                <input type="checkbox" defaultChecked={data.meta.parking} {...register("meta.parking")} />

                <label htmlFor="address">Address</label>
                <input type="text" defaultValue={data.location.address} {...register("location.address")} />

                <label htmlFor="city">City</label>
                <input type="text" defaultValue={data.location.city} {...register("location.city")} />

                <label htmlFor="country">Country</label>
                <input type="text" defaultValue={data.location.country} {...register("location.country")} />

                <button type="submit">Update</button>
                <Link to={`/venue/${id}`}>Cancel</Link>
              </form>
            </FormFields>

            <div>{formSubmitted && <UpdateVenueAPICall formData={formData} />}</div>
          </FormContainer>
        </>
      )}
    </div>
  );
}
