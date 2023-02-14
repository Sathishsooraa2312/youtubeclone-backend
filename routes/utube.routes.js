import express from "express";

import { getAllvideos,
    getvideoById,insertVideos
      } from "../services/utube.service.js";


     const router=express.Router();

router.get("/", async function (request, response) {
   
    if(request.query.rating){
      request.query.rating=+request.query.rating
    }
    const film = await getAllvideos(request);
  response.send(film);
  console.log(request.query) ;
});
router.get("/:id", async function (request, response) {
  const{id}=request.params;
  console.log(id);
  //  db.films.findOne({id:"101"})
  // const film=films.find((mv)=>mv.id===id);
      const film = await getvideoById(id);
  film 
  ?response.send(film) 
  : response.status(404).send({movie:"movie not found"});
});
router.post("/post",async function (request, response) {
    const data=request.body;
    console.log(data);
    console.log("hi");
    const result = await insertVideos(data);
    response.send(result);
  });

export default router;