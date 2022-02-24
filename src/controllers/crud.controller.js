const get = (model, populate) => async (req, res) => {
  try {
    const values = await model.find().populate(populate).lean().exec();
    return res.status(200).send(values);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const getOne = (model, populate) => async (req, res) => {
  try {
    const value = await model
      .findById(req.params.id)
      .populate(populate)
      .lean()
      .exec();
    return res.status(200).send(value);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const post = (model, populate) => async (req, res) => {
  try {
    const pics = [];
    for (let i = 0; i < req.files?.length || 0; i++) {
      pics.push(req.files[i].location);
    }
    const pic =
      pics.length != 0 ? pics : "https://i.postimg.cc/MTw0t80t/pngegg-1.png";
    const profilePic = req.file?.location;

    const value = await model.create({
      ...req.body,
      profilePic: profilePic,
      postImgs: pic,
      commentImgs: pic,
    });
    return res.status(200).send(value);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const patch = (model, populate) => async (req, res) => {
  try {
    let pics = [];
    for (let i = 0; i < req.files?.length || 0; i++) {
      pics.push(req.files[i].location);
    }

    if (pics.length === 0) {
      pics = undefined;
    }

    const profilePic = req.file?.location;

    const value = await model
      .findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          profilePic: profilePic,
          postImgs: pics,
          commentImgs: pics,
        },
        { new: true }
      )
      .populate(populate)
      .lean()
      .exec();
    return res.status(200).send(value);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

const deleteOne = (model, populate) => async (req, res) => {
  try {
    const value = await model
      .findByIdAndDelete(req.params.id)
      .populate(populate)
      .lean()
      .exec();
    return res.status(200).send(value);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

module.exports = (model, populate = null) => ({
  get: get(model, populate),
  getOne: getOne(model, populate),
  post: post(model, populate),
  patch: patch(model, populate),
  deleteOne: deleteOne(model, populate),
});