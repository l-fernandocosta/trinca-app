"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { pt } from "date-fns/locale";
import { useRouter, useSearchParams } from "next/navigation";
import { DateRange } from "react-day-picker";

export function DatePicker() {
  const router = useRouter();
  const searchparam = useSearchParams();
  const from = searchparam.get("from");
  const to = searchparam.get("to");

  const [date, setDate] = React.useState<{ from?: Date; to?: Date }>({
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
  });

  const updateQueryParams = (e: DateRange | undefined) => {
    setDate({
      from: e?.from,
      to: e?.to,
    });

    if (e?.from && e.to) {
      router.push(
        `/home?from=${format(e.from, "yyyy-MM-dd")}&to=${format(
          e.to,
          "yyyy-MM-dd"
        )}`
      );
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? (
            <span className='text-sm'>
              {format(date.from || new Date(), "dd/MM/yy", {
                locale: pt,
              })}{" "}
              - {format(date.to || new Date(), "dd/MM/yy", { locale: pt })}
            </span>
          ) : (
            <span>Selecione uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='range'
          locale={pt}
          selected={{
            from: date?.from,
            to: date?.to,
          }}
          onSelect={updateQueryParams}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
