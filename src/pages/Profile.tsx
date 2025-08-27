import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Target, 
  Award, 
  Calendar, 
  Activity,
  TrendingUp,
  Heart,
  Timer,
  Zap,
  Settings,
  Trophy,
  BarChart3,
  Medal
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  // Mock user data
  const userData = {
    name: "Carlos Silva",
    age: 32,
    location: "São Paulo, SP",
    joinDate: "Janeiro 2024",
    totalWorkouts: 156,
    totalDistance: 1247,
    avgPace: "5:42",
    currentVO2Max: 58.2,
    personalBests: {
      "5K": "20:15",
      "10K": "42:30", 
      "21K": "1:32:45",
      "42K": "3:18:22"
    }
  };

  const performanceLevel = "Elite Amateur";
  const nextGoal = "Sub-40 nos 10K";

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
              <Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                Insights
              </Link>
              <Link to="/profile" className="text-primary font-medium">
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Perfil do Atleta</h1>
          <p className="text-muted-foreground">Histórico de performance, metas e configurações</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Overview */}
            <Card className="performance-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{userData.name}</CardTitle>
                      <CardDescription className="text-base">
                        {userData.age} anos • {userData.location}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {performanceLevel}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Membro desde {userData.joinDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="glass" size="sm">
                    <Settings className="w-4 h-4" />
                    Editar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Activity className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{userData.totalWorkouts}</div>
                    <div className="text-sm text-muted-foreground">Treinos Totais</div>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{userData.totalDistance}km</div>
                    <div className="text-sm text-muted-foreground">Distância Total</div>
                  </div>
                  <div className="text-center">
                    <Timer className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{userData.avgPace}</div>
                    <div className="text-sm text-muted-foreground">Pace Médio</div>
                  </div>
                  <div className="text-center">
                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{userData.currentVO2Max}</div>
                    <div className="text-sm text-muted-foreground">VO2 Max Atual</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Bests */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Recordes Pessoais
                </CardTitle>
                <CardDescription>
                  Suas melhores marcas por distância
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(userData.personalBests).map(([distance, time], index) => (
                    <div key={distance} className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary-glow/5 rounded-lg border border-primary/20">
                      <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                        <Medal className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-lg font-bold text-foreground">{time}</div>
                      <div className="text-sm text-muted-foreground">{distance}</div>
                      {index === 1 && (
                        <div className="mt-2">
                          <span className="text-xs px-2 py-1 bg-chart-excellent/10 text-chart-excellent rounded-full">
                            Recente
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-chart-excellent">Próximo Objetivo</h4>
                      <p className="text-sm text-muted-foreground">{nextGoal} - faltam apenas 2:30</p>
                    </div>
                    <Button variant="glass" size="sm">
                      <Target className="w-4 h-4" />
                      Plano de Treino
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Historical Performance */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Performance Histórica
                </CardTitle>
                <CardDescription>
                  Evolução das métricas ao longo do tempo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* VO2 Max Progress */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">VO2 Max</h4>
                      <span className="text-chart-excellent font-bold">+7.3% (6 meses)</span>
                    </div>
                    <div className="h-24 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg flex items-end p-4">
                      <div className="flex space-x-2 items-end h-full w-full">
                        {[52.1, 53.2, 54.8, 56.1, 57.3, 58.2].map((value, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center">
                            <div className="text-xs text-muted-foreground mb-1">{value}</div>
                            <div 
                              className="bg-gradient-hero rounded-t w-full"
                              style={{ height: `${((value - 50) / 10) * 100}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Monthly Volume */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-primary/5 rounded-lg text-center">
                      <div className="text-lg font-bold text-foreground">187km</div>
                      <div className="text-sm text-muted-foreground">Volume Mensal</div>
                      <div className="text-xs text-chart-excellent">+15% vs anterior</div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg text-center">
                      <div className="text-lg font-bold text-foreground">16</div>
                      <div className="text-sm text-muted-foreground">Treinos/Mês</div>
                      <div className="text-xs text-chart-good">Meta atingida</div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg text-center">
                      <div className="text-lg font-bold text-foreground">92%</div>
                      <div className="text-sm text-muted-foreground">Consistência</div>
                      <div className="text-xs text-chart-excellent">Excelente</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Level */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Nível de Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary-glow/5 rounded-lg border border-primary/20">
                  <div className="text-xl font-bold text-primary mb-1">{performanceLevel}</div>
                  <div className="text-sm text-muted-foreground">Baseado em benchmarks</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">VO2 Max</span>
                    <span className="text-sm font-medium text-chart-excellent">Top 5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Consistência</span>
                    <span className="text-sm font-medium text-chart-excellent">Top 10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Velocidade</span>
                    <span className="text-sm font-medium text-chart-good">Top 15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Resistência</span>
                    <span className="text-sm font-medium text-chart-good">Top 12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Goals */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Metas Atuais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                    <h5 className="font-medium text-chart-excellent mb-1">10K Sub-40</h5>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-chart-excellent h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">75% concluído • Est. 4 semanas</p>
                  </div>

                  <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <h5 className="font-medium text-primary mb-1">VO2 Max 60+</h5>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">60% concluído • Est. 8 semanas</p>
                  </div>

                  <div className="p-3 bg-chart-average/10 border border-chart-average/20 rounded-lg">
                    <h5 className="font-medium text-chart-average mb-1">Meia Maratona 1:25</h5>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-chart-average h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">30% concluído • Est. 16 semanas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="w-5 h-5 text-primary" />
                  Conquistas Recentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-chart-excellent/10">
                  <div className="w-8 h-8 bg-chart-excellent/20 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-chart-excellent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Novo PB 10K</div>
                    <div className="text-xs text-muted-foreground">15 Jun 2024</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg bg-primary/10">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">VO2 Max 58+</div>
                    <div className="text-xs text-muted-foreground">10 Jun 2024</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg bg-chart-good/10">
                  <div className="w-8 h-8 bg-chart-good/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-chart-good" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">30 Dias Consecutivos</div>
                    <div className="text-xs text-muted-foreground">08 Jun 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Settings */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <Settings className="w-4 h-4" />
                  Configurar Metas
                </Button>
                
                <Button variant="glass" className="w-full justify-start">
                  <Activity className="w-4 h-4" />
                  Sincronizar Garmin
                </Button>
                
                <Button variant="glass" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4" />
                  Exportar Dados
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;