import { useState } from "react";
/* import { Link } from "react-router-dom"; */
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PostVenueAPICall from "./PostVenueAPICall";
import { CTAs, FormAddress, FormCity, FormContainer, FormCountry, FormDesc, FormFacilities, FormGuests, FormMedia, FormName, FormPrice, Sform } from "./PostVenueForm.style";
import { CTAArea, SLinkButton, Sbutton, Sh1Title, Sinput, SpFormError, Stextarea } from "../styles/globalstyles";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter a name").max(100, "No more than 20 characters"),
  description: Yup.string().required("Please enter a description").max(800, "No more than 300 characters"),
  media: Yup.string().required("Please enter a valid image URL"),
  price: Yup.number().typeError("Please enter the price").required("Price must be a number"),
  maxGuests: Yup.number().typeError("Please enter the maximum number of guests (up to 100)").required(),
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
          <Sh1Title>Add venue</Sh1Title>
        </div>

        <Sform onSubmit={handleSubmit(onSubmit)}>
          <FormName>
            <label hidden>Name:</label>
            <Sinput type="text" placeholder="Venue name" {...register("name")} />
            {errors.name && <SpFormError>{errors.name.message}</SpFormError>}
          </FormName>

          <FormDesc>
            <label hidden>Description:</label>
            <Stextarea type="text" rows="6" placeholder="Description" {...register("description")} />
            {errors.description && <SpFormError>{errors.description.message}</SpFormError>}
          </FormDesc>

          <FormMedia>
            <label hidden>Cover picture URL:</label>
            <Sinput type="text" placeholder="Cover picture URL" {...register("media")} />
            {errors.media && <SpFormError>{errors.media.message}</SpFormError>}
          </FormMedia>

          <FormPrice>
            <label>
              <h3>Price</h3>
            </label>
            <Sinput type="number" min="0" {...register("price")} />
            {errors.price && <SpFormError>{errors.price.message}</SpFormError>}
          </FormPrice>

          <FormGuests>
            <label>
              <h3>Maximum guests</h3>
            </label>
            <Sinput type="number" min="1" max="100" {...register("maxGuests")} />
            {errors.maxGuests && <SpFormError>{errors.maxGuests.message}</SpFormError>}
          </FormGuests>

          <FormFacilities>
            <div>
              <h3>Facilities</h3>
            </div>
            <div>
              <input type="checkbox" {...register("meta.pets")} />
              <label htmlFor="pets">Pets</label>
            </div>

            <div>
              <input type="checkbox" {...register("meta.breakfast")} />
              <label htmlFor="breakfast">Breakfast</label>
            </div>

            <div>
              <input type="checkbox" {...register("meta.wifi")} />
              <label htmlFor="breakfast">Wifi</label>
            </div>

            <div>
              <input type="checkbox" {...register("meta.parking")} />
              <label htmlFor="parking">Parking</label>
            </div>
          </FormFacilities>

          <FormAddress>
            <label hidden htmlFor="address">
              Address
            </label>
            <Sinput type="text" placeholder="Address" {...register("location.address")} />
          </FormAddress>

          <FormCity>
            <label hidden htmlFor="city">
              City
            </label>
            <Sinput type="text" placeholder="City" {...register("location.city")} />
          </FormCity>

          <FormCountry>
            <label hidden htmlFor="country">
              Country
            </label>
            <Sinput type="text" placeholder="Country" {...register("location.country")} />
          </FormCountry>

          <CTAs>
            <CTAArea>
              <Sbutton $green type="submit">
                Submit
              </Sbutton>

              <SLinkButton $dark to="/home">
                Back
              </SLinkButton>
            </CTAArea>
          </CTAs>
        </Sform>

        <div>{formSubmitted && <PostVenueAPICall formData={formData} />}</div>
      </FormContainer>
    </div>
  );
}
