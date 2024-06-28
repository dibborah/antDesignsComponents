import { DatePicker } from "antd";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";

const RHFDatePicker = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required",
      }}
      render={({ field, fieldState }) => {
        return (
          <Fragment>
            <DatePicker
              placeholder={props.placeholder}
              status={fieldState.error ? "error" : null}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => {
                field.onChange(date ? date.valueOf() : null);
              }}
            />
            <br />
            <span style={{ color: "red" }}>
              {fieldState.error && fieldState.error.message}
            </span>
          </Fragment>
        );
      }}
    />
  );
};

const App = () => {
  const { handleSubmit, control, watch } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("data", data);
      })}
    >
      <div>
        {
            // <span>{JSON.stringify(watch("startDate"))}</span>
        }
        <br />
        <RHFDatePicker
          control={control}
          name="startDate"
          placeholder="Start Date"
        />
        <br />
        <RHFDatePicker
          control={control}
          name="endDate"
          placeholder="End Date"
        />
      </div>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default App;
