import { useForm } from "react-hook-form";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
};

export default function FormWithDate({ onSubmitData }: { onSubmitData: (data: any) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  function onSubmit(data: FormData) {
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }

    const finalData = { ...data, date: selectedDate };
    toast.success("Form submitted successfully!");
    onSubmitData(finalData);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 max-w-md mx-auto space-y-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold">User Form</h2>

      {/* Name */}
      <div>
        <input
          {...register("name", { required: true })}
          placeholder="Enter your name"
          className="border p-2 w-full"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
      </div>

      {/* Email */}
      <div>
        <input
          {...register("email", { required: true })}
          placeholder="Enter your email"
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>

      {/* Date Picker */}
      <div>
        <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} />
      </div>

      <button className="bg-black text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
