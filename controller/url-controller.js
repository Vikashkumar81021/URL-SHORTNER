import { Url } from "../model/url-model.js";

import shortid from "shortid";
export const generateShortURL = async (req, res) => {
  try {
    const body = req.body;
    if (!body.url) {
      return res.status(400).json({
        sucess: false,
        message: "URL not found",
      });
    }
    const shortID = shortid();
    const url = await Url.create({
      shortid: shortID,
      redirectUrl: body.url,
      visitHistory: [],
    });
    res.json({ id: shortID });
  } catch (error) {
    console.log(`Error shortening URL: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export const getUrl = async (req, res) => {
  const shortid = req.params.id;
  const entry = await Url.findOneAndUpdate(
    { shortid },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.url);
};
