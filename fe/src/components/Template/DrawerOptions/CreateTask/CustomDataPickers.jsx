import React, { PureComponent } from "react";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import TimePicker from "material-ui-pickers/TimePicker";
import DatePicker from "material-ui-pickers/DatePicker";
import DateTimePicker from "material-ui-pickers/DateTimePicker";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikDatePicker = ({
  name,
  form: { setFieldValue },
  field: { value },
  ...rest
}) => {
  // console.log(rest);
  return (
    <DatePicker
      name={name}
      keyboard
      clearable
      autoOk
      label="Masked input"
      format="dd/MM/yyyy"
      placeholder="10/10/2018"
      // handle clearing outside => pass plain array if you are not controlling value outside
      mask={value =>
        value
          ? [/[0-3]/, /\d/, "/", /0|1/, /\d/, "/", /1|2/, /\d/, /\d/, /\d/]
          : []
      }
      disableOpenOnEnter
      onChange={value => {
        console.log("setting value to", value);
        setFieldValue("date", value);
      }}
      value={value}
      animateYearScrolling={false}
    />
  );
};

export default class App extends PureComponent {
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="pickers">
          <Formik
            initialValues={{ date: "2019-10-24T22:00:00.000Z" }}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              console.log(
                "would have submitted",
                JSON.stringify(values, null, 2)
              );
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, setFieldValue }) => {
              return (
                <Form>
                  <Field component={FormikDatePicker} name="date" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
