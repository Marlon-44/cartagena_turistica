import { RateReview } from "@mui/icons-material";
import styles from "./index.module.css";
import { motion } from "framer-motion"
import { Rating } from "@mui/material";
const ReviewCard = ({ review }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.review__container}>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <h2>{review.user} <img src="/assets/verified.svg" alt="" /></h2>
            <p>{review.text}</p>
            <h5>Posted on {review.date}</h5>
        </motion.div>
    );
};

export default ReviewCard;

