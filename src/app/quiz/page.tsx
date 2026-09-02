"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PropertyQuizModal from "@/components/quiz/PropertyQuizModal";

export default function QuizPage() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <PropertyQuizModal
        open={open}
        onClose={() => {
          setOpen(false);
          router.push("/");
        }}
      />
    </div>
  );
}
