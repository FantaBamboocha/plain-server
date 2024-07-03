import mongoose from "mongoose";

import PostService from "./PostService.js";
import handleError from "./handleError.js";

class PostController {
  async create(req, res) {
    try {
      const newPost = await PostService.create(req.body);

      res.status(200).json(newPost);
    } catch (error) {
      handleError(res, error);
    }
  }

  async getAll(_, res) {
    try {
      const posts = await PostService.getAll();

      res.status(200).json(posts);
    } catch (error) {
      handleError(res, error);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);

      res.status(200).json(post);
    } catch (error) {
      handleError(res, error);
    }
  }

  async update(req, res) {
    try {
      if (!req.body._id) {
        throw new Error("Invalid ID");
      }
      const updatedPost = await PostService.update(req.body);

      res.status(200).json(updatedPost);
    } catch (error) {
      handleError(res, error);
    }
  }

  async delete(req, res) {
    try {
      const deletedPost = await PostService.delete(req.params.id);
      res.status(200).json(deletedPost);
    } catch (error) {
      handleError(res, error);
    }
  }
}

export default new PostController();
