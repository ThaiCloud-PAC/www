"use client";

import { useState } from "react";

export function DemoFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-50 p-8 text-center text-green-800">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mb-4 h-12 w-12 text-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mb-2 text-xl font-semibold">Thank you for your interest!</h3>
        <p className="max-w-xs text-sm leading-6">เราได้รับข้อมูลของคุณแล้ว ทีมตัวแทนจะติดต่อกลับโดยเร็วที่สุดเพื่อเตรียมนัดหมาย Demo ครับ</p>
      </div>
    );
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <FormField label="Name" name="name" type="text" />
      <FormField label="Company" name="company" type="text" />
      <FormField label="Email" name="email" type="email" />
      <FormField label="Monthly Orders" name="monthly-orders" type="text" />
      <label className="text-sm font-medium text-slate-800" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="rounded-2xl border border-slate-900/12 px-4 py-3 text-sm text-slate-900 outline-none ring-[#0b6bcb] focus:ring-2"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#e87331] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf5f20] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-75"
      >
        {isSubmitting ? (
          <>
            <svg className="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            กำลังส่งข้อมูล...
          </>
        ) : (
          "Submit Demo Request"
        )}
      </button>
    </form>
  );
}

function FormField({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <>
      <label className="text-sm font-medium text-slate-800" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="rounded-2xl border border-slate-900/12 px-4 py-3 text-sm text-slate-900 outline-none ring-[#0b6bcb] focus:ring-2"
      />
    </>
  );
}
