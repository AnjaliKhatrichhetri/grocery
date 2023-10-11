import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstname: "",
  lastname: "",
  country: "",
  address: "",
  town: "",
  country: "",
  postcodezip: "",
  phone: "",
  email: "",
  accountpassword: "",
  ordernote: "",
});

function CheckOut() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="h-40 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center mt-9"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1020533374/photo/red-and-green-tomatoes-background-food-close-up.jpg?s=612x612&w=0&k=20&c=1U3bqRQq5UAJfc7FMMuyocOjqnYKUl1_YlycKV1p6qY=')`,
        }}
      >
        <h1 className="font-bold text-4xl text-white">Checkout</h1>

        <div className="pt-1 flex flex-row gap-3">
          
          <span className="font-bold text-white">Home -</span>
          <span className="text-gray-500 font-bold ">Check Out</span>
        </div>
      </div>

     <div className="flex flex-row justify-center gap-12">

     <div className="  w-3/6 flex justify-center items-center">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            country: "",
            town: "",
            address: "",
            postcodezip: "",
            phone: "",
            email: "",
            accountpassword: "",
            ordernote: "",
          }}
          validateSchema={schema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit} className="mt-8">
                                <h1 className="font-bold text-3xl">Billing Details</h1>

                <div className=" w-full flex flex-col gap-3 px-12 mt-12 pb-8">

                  <div className="flex flex-row gap-12 pt-9 ">
                    <div className="text-left flex gap-6 flex-col">
                      <label className="font-serif text-gray-800">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <Field type="text" name="firstname" className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none"/>
                      <ErrorMessage name="firstname" component={"div"} />
                    </div>
                    <div className="text-left flex gap-6 flex-col">
                      <label className="font-serif text-gray-800">
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <Field type="text" name="lastname" className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none" />
                      <ErrorMessage name="lastname" component={"div"} />
                    </div>
                  </div>

                  <div className="text-left flex gap-6 flex-col">
                    <label className="font-serif text-gray-800">
                      Country<span className="text-red-600">*</span>
                    </label>
                    <div>
                    <Field type="text" name="country" className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none"/>
                    <ErrorMessage name="country" component={"div"} />
                 
                    </div>
                
                  </div>

                  <div className="text-left flex gap-6 flex-col">
                    <label className="font-serif text-gray-800">
                      Address <span className="text-red-600">*</span>
                    </label>
                    <div className="flex flex-col gap-2">
                      <Field
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none p-4"
                      />
                      <Field
                        type="text"
                        name="address"
                        placeholder="Apartment,suite,unite ect(Optional)"
                        className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none p-4"
                      />
                      <ErrorMessage name="address" component={"div"} />
                    </div>
                  </div>

                  <div className="text-left flex gap-6 flex-col">
                    <label className="font-serif text-gray-800">
                      Town/City<span className="text-red-600">*</span>
                    </label>
                   <div>
                   <Field type="text" name="town" className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none"/>
                    <ErrorMessage name="town" component={"div"} />
                 
                   </div>
                  </div>

                  <div className="text-left flex gap-6 flex-col">
                    <label className="font-serif text-gray-800">
                      Phone<span className="text-red-600">*</span>
                    </label>
                    <div>    <Field type="text" name="phone" className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none"/>
                    <ErrorMessage name="phone" component={"div"} />
                </div>
                
                  </div>
                  <div className="text-left flex gap-6 flex-col">
                    <label className="font-serif text-gray-800">
                      Email<span className="text-red-600">*</span>
                    </label>
                    <div>         <Field type="text" name="postcode"className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none" />
                    <ErrorMessage name="postcode" component={"div"} />
                 </div>
                
                <div className="flex flex-row gap-2">
                  <input type="checkbox" />
                  <label className="font-serif text-gray-800">Create an account?</label>
                </div>

                <p className="text-gray-400">Create an account by entering the information below. If you are a returning customer please login at the top of the page</p>
                <div className="text-left flex gap-6 flex-col">
                    <label className="font-serif text-gray-800">
                      Account Password<span className="text-red-600">*</span>
                    </label>
                    <div>         <Field type="text" name="accountpassword"className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none" />
                    <ErrorMessage name="accountpassword" component={"div"} />
                 </div>
                
                <div className="flex flex-row gap-2">
                  <input type="checkbox" />
                  <label className="font-serif text-gray-800" >Ship to a different address?</label>
                </div>

                <div className="text-left flex gap-6 flex-col text-[serif]">
                    <label className="font-serif text-gray-800">
                      Order notes<span className="text-red-600">*</span>
                    </label>
                    <div>         <Field type="text" name="ordernote"className="h-10 w-full border-2 p-4 border-slate-300 rounded-md focus:outline-none" />
                    <ErrorMessage name="ordernote" component={"div"} />
                 </div>
           
                  </div>
           </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="bg-slate-200 flex flex-col gap-4 w-2/6 h-[42rem] p-10 mt-10 mr-2">
        <h1 className="font-bold text-2xl text-left">Your Order</h1>
        <div className="flex flex-row gap-8 text-left">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl pb-3 ">Products</p>
            <p className="text-slate-400">Vegetable's Package</p>
            <p className="text-slate-400">Fresh Vegetable</p>
            <p className="text-slate-400">Organic Bananas</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl pb-3 ">Total</p>
            <p className="text-slate-500 font-bold">$75.99</p>
            <p className="text-slate-500 font-bold">$151.99</p>
            <p className="text-slate-500 font-bold">$53.99</p>

          </div>
        </div>
        <div className="flex flex-row gap-[5rem] ">
          <span  className="font-bold text-xl pb-3 ">Subtotal</span>
          <span className="font-bold text-xl pb-3 text-right">$750.99</span>
        </div>
        <div className="flex flex-row gap-[7rem]">
          <span  className="font-bold text-xl pb-3 ">Total</span>
          <span  className="font-bold text-xl pb-3 text-red-600">$750.99</span>
        </div>
        <div className="flex flex-row gap-1">
          <input type="checkbox" />
          <p>Create an account?</p>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim a dolore molestias ipsam vel corporis sed, quae saepe doloremque molestiae! Sed laudantium nisi, fuga reiciendis magni exercitationem aut consequuntur.
          </p>
          <div className="flex flex-row gap-2 pb-4">
            <input type="checkbox" />
            <p>Check Payment</p>
          </div>
          <div className="flex flex-row gap-2 pb-4">
          <input type="checkbox" />
            <p>Paypal</p>
          </div>
  <button className="font-bold text-white bg-mainColor h-10">PLACE ORDER</button>
        </div>


      </div>
     </div>
    </div>
  );
}

export default CheckOut;
