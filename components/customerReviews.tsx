import Image from "next/image";
import { customerReviews } from "@/lib/data/customerReviews";

export default function CustomerReviews() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 w-full md:w-4/5 justify-center items-center py-20 px-8 md:px-30 gap-12">
      {customerReviews.map((review, index) => (
        <div key={index} className="flex -w-[320px]  p-6 gap-4 bg-blanc shadow-md/20 rounded-md">
          {!review.picture ? (
            <div className="h-10 w-10  min-w-10 rounded-full bg-corail"></div>
          ) : (
            <div
              className="h-12 w-12 min-w-12 
            "
            >
              <Image src={review.picture} height={50} width={50} alt={review.name} className="object-cover" />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <p className="text-normal">{review.review}</p>
            <p className="text-orange text-xs">{review.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
