"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step1Schema, Step2Schema, Step3Schema } from "@/lib/validations/form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

type Subject = {
  curriculumCode: string;
  name: string;
  description: string;
};

type FormData = {
  gradeName?: string;
  level?: string;
  resourceCode?: string;
  materialName?: string;
  content?: string;
};

type StepFormData = Subject | FormData;

export default function MultiStepForm() {
  const [step, setStep] = useState(1); // Current step
  const [subjects, setSubjects] = useState<Subject[]>([]); // Track added subjects
  const [formData, setFormData] = useState<FormData>(); // Store form data

  const totalSteps = 3;

  // Form setup based on the current step
  const currentSchema =
    step === 1 ? Step1Schema : step === 2 ? Step2Schema : Step3Schema;
  const form = useForm<StepFormData>({
    resolver: zodResolver(currentSchema),
    defaultValues:
      step === 1
        ? { curriculumCode: "", name: "", description: "" } // Step 1: Subject defaults
        : step === 2
        ? { gradeName: "", level: "" } // Step 2: Grade-level defaults
        : { resourceCode: "", materialName: "", content: "" }, // Step 3: Resource defaults
  });

  // Handle form submission for each step
  const onSubmit = async (values: StepFormData) => {
    if (step === 1) {
      // Add subject to the subjects array only if there are less than 7 subjects
      if (subjects.length < 7) {
        setSubjects((prevSubjects) => [...prevSubjects, values as Subject]);
        form.reset(); // Reset form for the next subject
      } else {
        // Optional: Provide feedback or prevent further subject additions
        alert("You can only add up to 7 subjects.");
      }

      // Check if we have 7 subjects now
    if (subjects.length + 1 === 7) {
        setStep(step + 1); // Automatically move to Step 2
      }
    } else {
      // Store data for other steps (Grade/Level and Resources)
      setFormData((prevData) => ({ ...prevData, ...values }));
  
      if (step === totalSteps) {
        // Final submission
        const finalData = {
          ...formData, // Grade and resource-level fields
          subjects, // Attach subjects array
        };
        console.log("Final Data", finalData); // Check the final data
  
        // Optionally, submit the final data to an API or process it further
      } else {
        setStep(step + 1);
      }
    }
  }; 

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // UseEffect to ensure formData is updated correctly on each step
  useEffect(() => {
    form.reset(formData); // Reset form data when the step changes
  }, [step, formData, form]);

  return (
    <div className="container mx-auto p-6">
      <Progress value={(step / totalSteps) * 100} className="h-2 mb-6" />
      <p className="text-center text-sm text-gray-500 mb-4">
        Step {step} of {totalSteps}
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {/* Step 1: Add Subject */}
          {step === 1 && (
            <>
              <FormField
                control={form.control}
                name="curriculumCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Curriculum Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Unique curriculum code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-6">
                <FormLabel>Added Subjects</FormLabel>
                {subjects.length > 0 ? (
                  <ul className="list-none space-y-1 ">
                    {subjects.map((subject, index) => (
                      <li
                        key={index}
                        className="bg-gray-500 text-white mb-2 w-fit rounded-sm p-2"
                      >
                        <span className="font-semibold">{subject.name}</span> -{" "}
                        {subject.curriculumCode}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No subjects added yet.</p>
                )}
              </div>
            </>
          )}

          {/* Step 2: Add Grades or Additional Data */}
          {step === 2 && (
            <>
              <FormField
                control={form.control}
                name="gradeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Grade 1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade Level</FormLabel>
                    <Input
                      placeholder="Primary / Secondary / University"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* Step 3: Add Resources or Final Details */}
          {step === 3 && (
            <>
              <FormField
                control={form.control}
                name="resourceCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Unique resource code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="materialName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Material name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Type</FormLabel>
                    <Input
                      placeholder="Content type (markdown, plain_text, url)"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevStep}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button type="submit">
              {step === totalSteps ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
