import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle2, ShieldCheck, Download, FileText } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { ebooks, ebookGridData as data } from '../../data/ebookData';

const EbookGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {ebooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-primary shadow-sm">
                  {book.price}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{book.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
                <p className="text-primary font-medium mb-6 italic text-sm">{book.details}</p>

                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Who it's for:</h4>
                  <ul className="space-y-3">
                    {book.whoItIsFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  <button className="w-full group flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary-dark/20 active:scale-[0.98]">
                    <ShoppingCart size={20} />
                    Buy Now
                  </button>
                  <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure Checkout</span>
                    <span className="flex items-center gap-1"><Download size={12} /> Instant Access</span>
                    <span className="flex items-center gap-1"><FileText size={12} /> PDF</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbookGrid;
