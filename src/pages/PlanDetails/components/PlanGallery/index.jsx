
import { Box, ImageList, ImageListItem } from "@mui/material";
import Subtitle from "../../../../components/Subtitle";
import styles from "./index.module.css"
import ImageModal from "../../../../components/ImageModal";
import { useState } from "react";
const PlanGallery = ({ plan }) => {
    const [selectedPhoto, setSelectedPhoto] = useState("")
    const [openModal, setOpenModal]= useState(false)
    const handleSelectedPhoto =( image)=>{
        setSelectedPhoto(image)
        setOpenModal(true)
    }

    return (
        <section className={styles.gallery__section}>
            <Subtitle text ="Galeria"/>
            <Box sx={{ width: "100%", height: "auto"}}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {plan.imagenes.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item}?w=248&fit=crop&auto=format`}
                                alt={"imagen del plan"}
                                loading="lazy"
                                onClick={() => handleSelectedPhoto(item)}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <ImageModal
                open={openModal}
                onClose={()=>setOpenModal(false)}
                photo ={selectedPhoto}
            />
        </section>

    );
};

export default PlanGallery;