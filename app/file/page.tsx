'use client'

import { Input } from '@/components/ui/input';
import { createClient } from '@/utils/supabase/client'

export default function Page() {
    const supabase = createClient()

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log(file);
        }
        if (!file) return
        const resUpload = await supabase.storage.from("Main").upload(file.name, file);
        console.log(resUpload);
    };

    return <div>
        <h2 className="font-bold text-2xl mb-4">Upload a file</h2>
        <p>
            You can upload a file to the database by using the Supabase Storage
            API.
        </p>
        <Input type="file" onChange={handleFileChange} />
    </div>
}
