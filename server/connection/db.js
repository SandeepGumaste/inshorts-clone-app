const Connection = () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
