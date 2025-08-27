import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Brain, 
  Target, 
  Activity, 
  Heart, 
  Zap,
  BarChart3,
  Calendar,
  Award,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Insights = () => {
  // Mock data for charts
  const vo2MaxData = [
    { month: 'Jan', value: 54.2 },
    { month: 'Fev', value: 55.1 },
    { month: 'Mar', value: 56.3 },
    { month: 'Abr', value: 57.1 },
    { month: 'Mai', value: 57.8 },
    { month: 'Jun', value: 58.2 },
  ];

  return (
    <div className="min-h-screen bg-background particles-bg">
      {/* Navigation */}
      <nav className="glass border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SmartPeak</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/training" className="text-muted-foreground hover:text-primary transition-colors">
                Treinos
              </Link>
              <Link to="/insights" className="text-primary font-medium">
                Insights
              </Link>
              <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Insights Personalizados</h1>
          <p className="text-muted-foreground">Análise inteligente da sua evolução e recomendações semanais</p>
        </div>

        {/* Weekly Suggestions */}
        <div className="mb-8">
          <Card className="performance-card glass-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                Sugestões Semanais de IA
              </CardTitle>
              <CardDescription>
                Recomendações personalizadas baseadas na sua performance recente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-chart-excellent" />
                    <h4 className="font-semibold text-chart-excellent">Foco da Semana</h4>
                  </div>
                  <p className="text-sm text-foreground mb-3">
                    Trabalhar resistência aeróbica com treinos de Zona 2 mais longos.
                  </p>
                  <Button variant="glass" size="sm" className="text-xs">
                    Ver Plano Completo
                  </Button>
                </div>

                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-primary">Volume Ideal</h4>
                  </div>
                  <p className="text-sm text-foreground mb-3">
                    Aumente o volume semanal em 10% (45km → 50km) mantendo intensidade.
                  </p>
                  <Button variant="glass" size="sm" className="text-xs">
                    Ajustar Metas
                  </Button>
                </div>

                <div className="p-4 bg-chart-average/10 border border-chart-average/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-chart-average" />
                    <h4 className="font-semibold text-chart-average">Atenção</h4>
                  </div>
                  <p className="text-sm text-foreground mb-3">
                    Padrão de sono irregular detectado. Impacta recuperação em 15%.
                  </p>
                  <Button variant="glass" size="sm" className="text-xs">
                    Dicas de Recuperação
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Charts Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* VO2 Max Evolution */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Evolução do VO2 Max
                </CardTitle>
                <CardDescription>
                  Progresso dos últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-t from-primary/5 to-transparent rounded-lg p-4 mb-4">
                  <div className="flex items-end justify-between h-full">
                    {vo2MaxData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center space-y-2">
                        <div className="text-xs font-medium text-foreground">{item.value}</div>
                        <div 
                          className="bg-gradient-hero rounded-t w-12 transition-all duration-300 hover:bg-primary-glow"
                          style={{ height: `${((item.value - 50) / 10) * 200}px` }}
                        />
                        <span className="text-xs text-muted-foreground">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-chart-excellent font-semibold">+7.4%</div>
                    <div className="text-muted-foreground">Melhoria</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary font-semibold">58.2</div>
                    <div className="text-muted-foreground">Atual</div>
                  </div>
                  <div className="text-center">
                    <div className="text-chart-excellent font-semibold">Excelente</div>
                    <div className="text-muted-foreground">Para sua idade</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Zones Analysis */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Zona de Treinos Mais Efetiva
                </CardTitle>
                <CardDescription>
                  Análise das últimas 4 semanas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-chart-excellent/10 to-chart-good/10 rounded-lg border border-chart-excellent/20">
                    <h3 className="text-lg font-bold text-chart-excellent mb-2">Zona 2 - Base Aeróbica</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Seus melhores resultados vêm de treinos longos em zona 2 (142-158 bpm)
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-chart-excellent">68%</div>
                        <div className="text-muted-foreground">do tempo semanal</div>
                      </div>
                      <div>
                        <div className="font-semibold text-chart-good">+23%</div>
                        <div className="text-muted-foreground">melhoria no pace</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">4.2</div>
                        <div className="text-muted-foreground">watts/kg ganho</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-medium text-primary mb-2">Zona Ideal para Você</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">FC Alvo:</span>
                          <span className="font-medium">142-158 bpm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pace Alvo:</span>
                          <span className="font-medium">5:45-6:15 min/km</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duração:</span>
                          <span className="font-medium">60-90 min</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-chart-average/5 rounded-lg">
                      <h4 className="font-medium text-chart-average mb-2">Outras Zonas</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Zona 3-4:</span>
                          <span className="font-medium">20% do tempo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Zona 5:</span>
                          <span className="font-medium">5% do tempo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Recuperação:</span>
                          <span className="font-medium">7% do tempo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Metrics */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Métricas Chave
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-chart-excellent/10 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Consistência</span>
                    <span className="text-sm font-bold text-chart-excellent">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div className="bg-chart-excellent h-1.5 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>

                <div className="p-3 bg-chart-good/10 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Progressão</span>
                    <span className="text-sm font-bold text-chart-good">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div className="bg-chart-good h-1.5 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>

                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Eficiência</span>
                    <span className="text-sm font-bold text-primary">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>

                <div className="p-3 bg-chart-average/10 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Recuperação</span>
                    <span className="text-sm font-bold text-chart-average">71%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div className="bg-chart-average h-1.5 rounded-full" style={{width: '71%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Metas da Semana
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Volume Total</span>
                    <span className="text-sm font-medium text-chart-good">38/50 km</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-chart-good h-2 rounded-full" style={{width: '76%'}}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Treinos Z2</span>
                    <span className="text-sm font-medium text-chart-excellent">3/3</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-chart-excellent h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Qualidade do Sono</span>
                    <span className="text-sm font-medium text-chart-average">5/7 dias</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-chart-average h-2 rounded-full" style={{width: '71%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle>Ações Recomendadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="performance" className="w-full justify-start">
                  <Calendar className="w-4 h-4" />
                  Planejar Próxima Semana
                </Button>
                
                <Link to="/comparison">
                  <Button variant="glass" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4" />
                    Comparar com Mês Anterior
                  </Button>
                </Link>
                
                <Button variant="glass" className="w-full justify-start">
                  <Brain className="w-4 h-4" />
                  Gerar Relatório Completo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;