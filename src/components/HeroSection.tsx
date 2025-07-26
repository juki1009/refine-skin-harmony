import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-lato mb-6 leading-tight">
            <span className="text-primary">清潔感</span>があなたの
            <span className="bg-gradient-hero bg-clip-text text-transparent">自信</span>になる
          </h1>
          
          
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            完全個室でプライベートな空間。初めての方も安心のサポート。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              初回体験を予約する
              <span className="text-sm block">(無料カウンセリング付)</span>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              詳しく見る
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">完全個室</div>
              <div className="text-sm text-muted-foreground">プライベート空間</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">都度払い</div>
              <div className="text-sm text-muted-foreground">気軽にスタート</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">男女対応</div>
              <div className="text-sm text-muted-foreground">どなたでも安心</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">初心者歓迎</div>
              <div className="text-sm text-muted-foreground">丁寧にサポート</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;