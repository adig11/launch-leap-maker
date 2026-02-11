
CREATE TABLE public.user_phones (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.user_phones ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (no auth yet at onboarding)
CREATE POLICY "Anyone can insert phone" ON public.user_phones FOR INSERT WITH CHECK (true);

-- Allow reading own phone by matching phone number
CREATE POLICY "Anyone can read phones" ON public.user_phones FOR SELECT USING (true);
