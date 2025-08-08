import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="hero" size="icon" aria-label="Chat" onClick={() => setOpen(true)} className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-[var(--shadow-elegant)]">
        <MessageCircle className="h-5 w-5" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-brandSerif">How can we help?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">Live chat coming soon. For now, email us at support@ishaurja.example</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
