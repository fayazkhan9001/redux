import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToContacts, deleteContact } from "../reduxStore/contactReducer";
import { useSelector } from "react-redux";

function Contact() {
  const dispatch = useDispatch();
  const { contactReducer } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required(),
      contact: Yup.number().required(),
    }),
    onSubmit: (values) => {
      let newContact = {
        ...values,
        id: Date.now(),
      };

      dispatch(addToContacts(newContact));
    },
  });

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  const handleUpdate = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div className="w-96 mx-auto p-8">
        <h1 className="font-bold text-xl">Contact Book</h1>
        <form onSubmit={formik.handleSubmit}>
          {[
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
            { name: "contact", label: "Contact" },
          ].map(({ name, label }) => (
            <div className="my-3" key={name}>
              <label htmlFor={name}>{label}</label> <br />
              <input
                name={name}
                id={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                className="border-[1px] w-full p-1"
              />
            </div>
          ))}
          <button
            type="submit"
            className="px-6 py-1 bg-blue-600 text-white my-3"
          >
            Add
          </button>
        </form>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactReducer?.contacts?.length < 1 ? (
            <tr>
              <td>
                <h1>data not found...</h1>
              </td>
            </tr>
          ) : (
            contactReducer?.contacts?.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td className="flex justify-evenly">
                  <span>
                    <BsPencilSquare
                      onClick={() => handleUpdate(item.id)}
                      className="text-xl font-bold text-indigo-600 cursor-pointer"
                    />
                  </span>
                  <span>
                    <IoTrashOutline
                      onClick={() => handleDelete(item.id)}
                      className="text-xl font-bold text-orange-600 cursor-pointer"
                    />
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
