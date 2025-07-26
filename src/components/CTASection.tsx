import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "初回体験50%OFF",
    "無料カウンセリング付",
    "完全個室でプライバシー配慮",
    "都度払いで安心"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            まずは<span className="text-white">無料カウンセリング</span>から
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            脱毛に関する疑問や不安を解消いたします。<br />
            お一人お一人に最適なプランをご提案させていただきます。
          </p>

          {/* 特典リスト */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-white mr-2" />
                <span className="text-primary-foreground text-sm font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA ボタン */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <div className="bg-white/10 rounded-xl p-6 text-center flex-1 max-w-sm">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                LINEで簡単予約
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                24時間いつでも<br />
                気軽にお問い合わせ
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                LINEで予約する
              </Button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center flex-1 max-w-sm">
              <Phone className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                お電話で相談
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                専門スタッフが<br />
                丁寧にご対応
              </p>
              <Button variant="outline" size="lg" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                03-1234-5678
              </Button>
            </div>
          </div>

          {/* 営業時間情報 */}
          <div className="bg-white/10 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white mr-2" />
              <h4 className="text-lg font-semibold text-primary-foreground">営業時間</h4>
            </div>
            <div className="text-primary-foreground/90 text-sm">
              <p>平日: 10:00 - 21:00</p>
              <p>土日祝: 9:00 - 19:00</p>
              <p className="text-yellow-200 mt-2">定休日: 毎週水曜日</p>
            </div>
          </div>

          <div className="mt-8 text-primary-foreground/70 text-sm">
            <p>※ 初回カウンセリングは約30分程度です</p>
            <p>※ 当日施術をご希望の場合は事前にお申し付けください</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;