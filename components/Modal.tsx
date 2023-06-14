import { Form } from "@types";

interface Modalprops {
   formData: Form;
}

function Modal({ formData }: Modalprops) {
   const { car_type, pick_up, drop_off, pick_time, drop_time } = formData;
   console.log(car_type, pick_up, drop_off, pick_time, drop_time);
   return <div>fbadhjfdv</div>;
}

export default Modal;
