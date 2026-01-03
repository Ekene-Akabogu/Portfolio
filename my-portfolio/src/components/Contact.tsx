/**
 * @copyright 2025 ekeneakabogu
*/

/**
 * Node Modules
 */
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';


/**
 * Custom Modules
 */
import { fadeUp } from '@/lib/animation';

/**
 * Components
 */
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormMessage 
} from '@/components/ui/form';    
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';

/**
 * Types
 */
type ContactFormValues = {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;  
}
export const Contact = () => {
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
        },
    });

    const onSubmit = (values: ContactFormValues) => {
        const subject = encodeURIComponent('New Contact Message');
        const body = encodeURIComponent(`
                Name: ${values.name}
                Email: ${values.email}
                Phone: ${values.phone}
                Company: ${values.company}

                Message:
                ${values.message}
            `);

    window.location.href = `mailto:ekenem.akabogu@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeUp}
            className="mt-30 scroll-mt-10"
            id='contact'
        >
            <SectionHeader
                subtitle='Contact'
                title={'Let us make something great together!'}
            />

            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="w-full mx-auto space-y-4 mt-10"
                >
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input 
                                            placeholder="Name" 
                                            className='border-0'
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input 
                                            placeholder="youremail@example.com" 
                                            className='border-0'
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input 
                                            placeholder="Company" 
                                            className='border-0'
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input 
                                            placeholder="Phone Number" 
                                            className='border-0'
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea 
                                        placeholder="Write your message..."
                                        className="h-36 border-0" 
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                        type="submit" 
                        size='lg' 
                        className="w-full"
                    >Send Message
                    </Button>
                </form>
            </Form>

        </motion.section>
    );
};