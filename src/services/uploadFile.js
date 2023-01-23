const uploadFile = async (image) => {
    const options = new FormData();
    const URL = "https://api.cloudinary.com/v1_1/dumxkdcvd/image/upload";
    options.append("file", image);
    options.append("upload_preset", "mangaquizz");
    options.append("cloud_name", "dumxkdcvd");
    const response = await fetch(URL, { method: "post", body: options })
    //   .then((res) => res.json())
    //   .then((data) => {
    //       data.url.split("upload")[0] +
    //         "upload/w_250,h_250,c_fill" +
    //         data.url.split("upload")[1]
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     err;
    //   });
    return await response.json();
};

const resizeImage = (url) => {
    return url.split("upload")[0] + "upload/w_300,h_300,c_fill" + url.split("upload")[1];
}

export {uploadFile, resizeImage};