import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Gallary from "@/components/Gallery/Gallery";
import Avatar from "@/components/Avatar/Avatar";
import { Button } from "@/components/Buttons/Buttons";
import SmallCard from "@/components/SmallCard/SmallCard";
import ApiTask from "@/components/ApiTask/ApiTask";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5">
        <div className="row m-0">
          <div className="col-lg-8 col-12">
            <div className="row m-0 bg-white p-3 shadow mb-4">
              <Gallary />
              <div className="row m-0 p-0 mt-3">
                <div className="col-12 p-0 ">
                  <Avatar
                    name="اسم البائع"
                    number="966598398+"
                    withFave={true}
                  />
                </div>
                <div className="col-12 p-0 ">
                  <h4 className="mt-3 fw-bold">
                    شراء مجموعة من السياريات من موديلات 1990{" "}
                  </h4>
                  <h6
                    className="text-secondary"
                    style={{ fontWeight: "400", fontSize: "14px" }}
                  >
                    Code 1234
                  </h6>
                </div>
                <div className="col-12 p-0 row m-0 ">
                  <div className="col-md-6 col-12 d-flex flex-wrap">
                    <span className="m-2">
                      <Button kind="transparent" btnText={"10000+"} />
                    </span>
                    <span className="m-2">
                      <Button kind="transparent" btnText={"10010+"} />
                    </span>
                    <span className="m-2">
                      <Button kind="transparent" btnText={"10020+"} />
                    </span>
                  </div>
                  <div className="col-md-6 col-12 d-flex justify-content-between flex-wrap">
                    <input
                      type="text"
                      className="form-control form-control1 my-2"
                      placeholder="تأكيد المبلغ"
                    />
                    <div className="my-2">
                      <Button
                        kind="gradient"
                        gradient={true}
                        btnText={"تأكيد"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" row m-0 bg-white p-3 shadow mb-5">
              <h4 className="mt-3 fw-bold">ارسال رسالة الي البائع</h4>
              <h6
                className="mt-3"
                style={{ fontSize: "16px", fontWeight: "400" }}
              >
                يمكنك في وقت البث المباشر إرسال رسالة الي البائع للاستفسار
              </h6>
              <div className="col-12 d-flex justify-content-between flex-wrap">
                <input
                  type="text"
                  className="form-control  sendMessage my-2 "
                  placeholder="أكتب سؤالك"
                />
                <div className="my-2">
                  <Button
                    kind="circle"
                    circle={true}
                    withIcon="fas fa-paper-plane"
                  />
                </div>
              </div>
            </div>

            <div className=" row m-0 bg-white p-3 shadow mb-5">
              <h4 className="mt-3 fw-bold">تفاصيل المزاد</h4>

              <div className="col-12 d-flex justify-content-between flex-wrap align-items-center">
                <div className="mt-3">
                  <p>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="mx-2"> Egypt,Mansoura</span>
                  </p>
                  <p>
                    <span>
                      <i className="fas fa-dollar-sign"></i>
                    </span>
                    <span className="mx-2"> البيع لأعلي سعر</span>
                  </p>
                  <p style={{ color: "indigo" }}>
                    <span>
                      <i className="fas fa-th-large"></i>
                    </span>
                    <span className="mx-2">منتجات متعددة</span>
                  </p>
                </div>
                <div>
                  <p className="mb-1">200 قطعة</p>
                  <p style={{ color: "#FEA515" }}>
                    <span>
                      <i className="fas fa-microphone"></i>
                    </span>
                    <span className="mx-2">صوت</span>
                  </p>
                </div>
              </div>

              <div className="col-12 my-2 border-bottom"></div>
              <div>
                <h5 className="mt-3 fw-bold"> وصف</h5>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.
                </p>
              </div>

              <div className="col-12 my-2 border-bottom"></div>
              <div>
                <h5 className="mt-3 fw-bold">سياسة الاسترجاع والاستبدال </h5>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="row m-0 bg-white p-3 shadow mb-4">
              <h4 className="mb-3">المتنافسون</h4>
              <div className="my-2 d-flex align-items-center justify-content-between">
                <Avatar name="اسم المزايد" number="13:59:00" />
                <span
                  className="text-warning fw-bold rounded p-2 py-1"
                  style={{ background: "rgba(245, 243, 39, 0.2)" }}
                >
                  20
                  <span className="">+</span>
                </span>
              </div>
              <div className="my-2 d-flex align-items-center justify-content-between">
                <Avatar name="اسم المزايد" number="13:59:00" />
                <span
                  className="text-warning fw-bold rounded p-2 py-1"
                  style={{ background: "rgba(245, 243, 39, 0.2)" }}
                >
                  20
                  <span className="">+</span>
                </span>
              </div>
              <div className="my-2 d-flex align-items-center justify-content-between">
                <Avatar name="اسم المزايد" number="13:59:00" />
                <span
                  className="text-warning fw-bold rounded p-2 py-1"
                  style={{ background: "rgba(245, 243, 39, 0.2)" }}
                >
                  20
                  <span className="">+</span>
                </span>
              </div>
              <div className="my-2 d-flex align-items-center justify-content-between">
                <Avatar name="اسم المزايد" number="13:59:00" />
                <span
                  className="text-warning fw-bold rounded p-2 py-1"
                  style={{ background: "rgba(245, 243, 39, 0.2)" }}
                >
                  20
                  <span className="">+</span>
                </span>
              </div>
            </div>

            <div className="row m-0 bg-white p-3 shadow mb-4 text-secondary">
              <div
                className="my-2 d-flex align-items-center justify-content-between p-2"
                style={{ background: "#edebeb" }}
              >
                <p className="m-0">القيمة الابتدائية</p>
                <span className="fw-bold">5000</span>
              </div>

              <div
                className="my-2 d-flex align-items-center justify-content-between p-2"
                style={{ background: "#edebeb" }}
              >
                <p className="m-0">القيمة الابتدائية</p>
                <span className="fw-bold">5000</span>
              </div>

              <div
                className="my-2 d-flex align-items-center justify-content-between p-2 "
                style={{ background: "#edebeb" }}
              >
                <p className="m-0">القيمة الابتدائية</p>
                <span className="fw-bold">5000</span>
              </div>

              <div
                className="my-2 d-flex align-items-center justify-content-between p-2"
                style={{ background: "#edebeb" }}
              >
                <p className="m-0">القيمة الابتدائية</p>
                <span className="fw-bold">5000</span>
              </div>

              <div
                className="my-2 d-flex align-items-center justify-content-between p-2"
                style={{ background: "#edebeb" }}
              >
                <p className="m-0">القيمة الابتدائية</p>
                <span className="fw-bold">5000</span>
              </div>
            </div>

            <div className="row m-0 bg-white p-3 shadow mb-4">
              <h4 className="mb-3">المزادات المفضلة</h4>
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>

          <ApiTask />
        </div>
      </div>
    </>
  );
}
