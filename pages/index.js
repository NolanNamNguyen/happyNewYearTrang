import Head from "next/head";
import styles from "../styles/Home.module.css";
import RaiseSalary from "../components/RaiseSalary";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, getValues } = useForm();
  const ohHi = "";
  const uploadFile = (data) => {
    const formData = new FormData();
    formData.append("file", data.myfile[0]);
    axios.post("http://10.22.116.208/Generator_T2", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      console.log(response);
    });
    console.log('ok lah')
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(uploadFile)}>
        <input ref={register} id="KhoiFile" name="myfile" type="file"></input>
        <button
          type="submit"
        >
          upload
        </button>
      </form>

      <RaiseSalary helloMsg={ohHi} isRender={true}></RaiseSalary>
    </div>
  );
}
