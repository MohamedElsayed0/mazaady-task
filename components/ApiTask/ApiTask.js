import React,{useState,useEffect} from 'react'
import { connect } from "react-redux";
import { Formik, Form,Field,ErrorMessage} from "formik";
import { getAllCategories,getSubCategory } from '@/store/Actions';
import * as Yup from "yup";
import { Button } from '../Buttons/Buttons';

const Schema = Yup.object().shape({
  allCategories: Yup.string().required("Required"),
  subcategory: Yup.string().required("Required"),
});


const ApiTask = ({
  getAllCategories,
  Categories,
  getSubCategory,
  SubCategoryChidren,
}) => {
  const [loading, setLoading] = useState(false);
  const [allCat, setAllCat] = useState([]);
  const [mainCategoryId, setMainCategoryId] = useState(null);

  const [subCat, setSubCat] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState(null);
  const [subCategoryChidren, setSubCategoryChidren] = useState([]);

  const [dataTable, setDataTable] = useState({});
  const [closeModal, setCloseModal] = useState(true);
  const [initialValues] = useState({
    allCategories: "",
    subcategory: "",
  });
  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    if (mainCategoryId) {
      const subcategory = allCat.find(
        (item) => item.id === Number(mainCategoryId)
      );
      setSubCat(subcategory.children);
    }
  }, [mainCategoryId]);

  useEffect(() => {
    if (subCategoryId) getSubCategory(subCategoryId);
  }, [subCategoryId]);

  useEffect(() => {
    if (Categories) {
      const { loading, error, data } = Categories;
      setLoading(loading);
      if (data && data.data) {
        const categories = data.data.categories;
        setAllCat(categories);
      }
    }
  }, [Categories]);

  useEffect(() => {
    if (SubCategoryChidren.data) {
      setSubCategoryChidren(SubCategoryChidren.data.data);
    }
  }, [SubCategoryChidren]);

  const onFormSubmit = (values) => {
    const allCategories = JSON.parse(values.allCategories);
    const subcategory = JSON.parse(values.subcategory);
    const newData = {
      ...values,
      allCategories: allCategories.name,
      subcategory: subcategory.name,
    };
    setDataTable(newData);
    setCloseModal(!closeModal);
  };

  return (
    <div className="row">
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={Schema}
        onSubmit={onFormSubmit}
      >
        {({ values, handleBlur, handleChange, setFieldValue }) => {
          return (
            <Form className="col-12">
              <div className="my-4">
                <label
                  htmlFor="allCategories"
                  className="mb-2 fw-bold text-dark"
                >
                  التصنيف الرئيسي <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  name="allCategories"
                  className="input-select"
                  value={values.allCategories}
                  required
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubCategoryChidren([]);
                    setFieldValue("subcategory", "");
                    const fromStringToObject = JSON.parse(event.target.value);
                    setMainCategoryId(fromStringToObject.id);
                  }}
                >
                  <option value="">اختر تصنيف</option>
                  {allCat.length
                    ? allCat.map((item, index) => (
                        <option
                          key={item.id}
                          value={`{"name":"${item.name}","id":"${item.id}"}`}
                        >
                          {item.name}
                        </option>
                      ))
                    : null}
                </select>
              </div>

              <div className="my-4">
                <label htmlFor="subcategory" className="mb-2 fw-bold text-dark">
                  التصنيف الفرعي <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  name="subcategory"
                  className="input-select"
                  value={values.subcategory}
                  required
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    const fromStringToObject = JSON.parse(event.target.value);
                    const categoryId = fromStringToObject.id;
                    setSubCategoryChidren([]);
                    setSubCategoryId(categoryId);
                  }}
                >
                  <option value="" disabled>
                    اختر التصنيف الفرعي
                  </option>
                  {subCat.length ? (
                    subCat.map((item, index) => (
                      <option
                        key={item.id}
                        value={`{"name":"${item.name}","id":"${item.id}"}`}
                      >
                        {item.name}
                      </option>
                    ))
                  ) : (
                    <option value="اختر التصنيف الرئيسي اولا" disabled>
                      {" "}
                      اختر التصنيف الرئيسي اولا
                    </option>
                  )}
                </select>
              </div>

              {subCategoryChidren && subCategoryChidren.length
                ? subCategoryChidren.map((item, index) => {
                    return (
                      <div className="my-4" key={item.id}>
                        {item.options?.length ? (
                          <div className="my-4">
                            <label
                              htmlFor="subcategory"
                              className="mb-2 fw-bold text-dark"
                            >
                              {item.name}
                            </label>
                            <select
                              name={item.slug}
                              className="input-select"
                              defaultValue={""}
                              onBlur={handleBlur}
                              onChange={(event) => {
                                handleChange(event);
                                if (event.target.value === "Other") {
                                  event.target.nextElementSibling.classList.remove(
                                    "d-none"
                                  );
                                } else {
                                  event.target.nextElementSibling.classList.add(
                                    "d-none"
                                  );
                                }
                              }}
                            >
                              <option value="" disabled>
                                {item.name}{" "}
                              </option>
                              <option value="Other">Other</option>

                              {item.options.map((item) => (
                                <option key={item.id} value={item.slug}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                            <div className="mt-2 d-none">
                              <Field
                                name={`${item.slug}-other-value`}
                                defaultValue=""
                                className="input-select"
                                placeholder={"حدد هنا"}
                                onBlur={handleBlur}
                                onChange={(event) => {
                                  handleChange(event);
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="my-4">
                            <label
                              htmlFor="subcategory"
                              className="mb-2 fw-bold"
                            >
                              {item.name}
                            </label>
                            <Field
                              name={item.slug}
                              defaultValue=""
                              className="input-select"
                              placeholder={item.name}
                              onBlur={handleBlur}
                              onChange={(event) => {
                                handleChange(event);
                              }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })
                : null}
              <div className="mb-5">
                <Button btnText="إرسال" type="submit" kind={"gradient"} />
              </div>
              <div dir="ltr">
                <div
                  className={`modal fade ${closeModal ? "" : "show"}`}
                  id="exampleModalCenter"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                  style={{ display: closeModal ? "none" : "block" }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered w-100"
                    role="document"
                  >
                    <div className="modal-content w-100">
                      <div className="modal-body w-100">
                        {dataTable !== {} ? (
                          <div className="col-12" dir="ltr">
                            <table className="table table-bordered w-100">
                              <thead>
                                <tr>
                                  <th scope="col">Key</th>
                                  <th scope="col">Value</th>
                                </tr>
                              </thead>
                              <tbody>
                                {Object.entries(dataTable).map(
                                  ([key, value], index) => {
                                    return (
                                      <tr key={index}>
                                        <th scope="row">{key}</th>
                                        <th>{value}</th>
                                      </tr>
                                    );
                                  }
                                )}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          onClick={() => {
                            setCloseModal(!closeModal);
                          }}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      {/* {dataTable !== {} ? (
        <div className="col-sm-5 col-12" dir="ltr">
          {Object.entries(dataTable).map(([key, value], index) => {
            return (
              <div className="d-flex" key={index}>
                <span>{key}</span>
                <span className="mx-2">======</span>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};
const mapStateToProps=(state)=>{
 return {
   Categories: state.Categories,
   SubCategoryChidren: state.SubCategory,
 };
}
export default connect(mapStateToProps, { getAllCategories, getSubCategory })(
  ApiTask
);