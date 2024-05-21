import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
const Body = () => {
  return (
    <div className="flex gap-4 my-4 mx-8">
      <Button asChild>
        <Link className="flex gap-1" href="/post">
          <Plus />
          <span>Post a blog</span>
        </Link>
      </Button>
      <Button asChild>
        <Link href="/my-blogs">View your blogs</Link>
      </Button>
    </div>
  );
};

export default Body;
