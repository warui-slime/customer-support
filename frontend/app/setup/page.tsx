"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Building,
  Upload,
  FileText,
  Check,
  ChevronRight,
  ChevronLeft,
  Palette,
  MessageSquare,
  Send,
  ThumbsUp,
  ThumbsDown,
  X,
} from "lucide-react"
import { useDropzone } from "@/components/setup/use-dropzone"
import { ChatWidget } from "@/components/setup/chat-widget"
import { ThemeToggle } from "@/components/theme-toggle"

const STEPS = [
  { id: "profile", title: "Business Profile", icon: Building },
  { id: "upload", title: "Data Upload", icon: Upload },
  { id: "template", title: "Template Selection", icon: FileText },
  { id: "customize", title: "Widget Customization", icon: Palette },
  { id: "test", title: "Test Drive", icon: MessageSquare },
]

export default function SetupPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(20)

  // Business Profile
  const [businessName, setBusinessName] = useState("")
  const [industry, setIndustry] = useState("")
  const [timezone, setTimezone] = useState("")

  // Data Upload
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  // Template Selection
  const [selectedTemplate, setSelectedTemplate] = useState("")

  // Widget Customization
  const [widgetColor, setWidgetColor] = useState("#6d28d9")
  const [widgetGreeting, setWidgetGreeting] = useState("Hi! Ask me about orders, hours, or policies.")
  const [widgetPlacement, setWidgetPlacement] = useState("bottom-right")
  const [showConfidence, setShowConfidence] = useState(true)

  // Test Drive
  const [testQuery, setTestQuery] = useState("")
  const [testResponses, setTestResponses] = useState<{ message: string; type: "user" | "bot"; confidence?: number }[]>(
    [],
  )

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prev) => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      setProgress((currentStep + 2) * 20)
    } else {
      // Complete setup
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setProgress(currentStep * 20)
    }
  }

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // const handleTestQuery = () => {
  //   if (!testQuery.trim()) return

  //   // Add user message
  //   setTestResponses((prev) => [...prev, { message: testQuery, type: "user" }])

  //   // Simulate AI response based on query
  //   setTimeout(() => {
  //     let response = ""
  //     let confidence = 0

  //     if (testQuery.toLowerCase().includes("return")) {
  //       response =
  //         "Our return policy allows returns within 30 days of purchase with a receipt. Items must be unused and in original packaging."
  //       confidence = 95
  //     } else if (testQuery.toLowerCase().includes("hour")) {
  //       response = "Our business hours are Monday-Friday 9am-6pm, Saturday 10am-4pm, and we're closed on Sundays."
  //       confidence = 98
  //     } else if (testQuery.toLowerCase().includes("order") || testQuery.toLowerCase().includes("delivery")) {
  //       response =
  //         "Orders typically ship within 1-2 business days. You can track your order using the tracking number sent to your email."
  //       confidence = 92
  //     } else {
  //       response =
  //         "I'm not sure I understand your question. Could you please rephrase or ask about our products, hours, or policies?"
  //       confidence = 70
  //     }

  //     setTestResponses((prev) => [
  //       ...prev,
  //       {
  //         message: response,
  //         type: "bot",
  //         confidence: confidence,
  //       },
  //     ])

  //     setTestQuery("")
  //   }, 1000)
  // }
  const handleTestQuery = async () => {
    if (!testQuery.trim()) return;

    const query = testQuery;
    // add the user’s question
    setTestResponses((prev) => [...prev, { message: query, type: "user" }]);
    // clear the input immediately
    setTestQuery("");

    try {
      const res = await fetch("https://takesnews.store/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const { response } = await res.json();

      // add the bot’s answer from your API
      setTestResponses((prev) => [
        ...prev,
        { message: response, type: "bot" },
      ]);
    } catch (err) {
      console.error(err);
      setTestResponses((prev) => [
        ...prev,
        {
          message:
            "Sorry, something went wrong — please try again later.",
          type: "bot",
        },
      ]);
    }
  };

  const handleEscalation = () => {
    setTestResponses((prev) => [
      ...prev,
      {
        message: "Let me connect you to Sarah from customer support... Your chat history will be transferred.",
        type: "bot",
      },
    ])
  }

  return (
    <div className="min-h-screen ">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center border-b border-gray-800">
        <div className="font-bold text-2xl bg-background">SupportAI</div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-background mb-2">Setup Wizard</h1>
            <p className="text-gray-400">Complete these steps to set up your automated customer support</p>

            <Progress value={progress} className="mt-6 h-2 " />

            <div className="hidden md:flex justify-between mt-4">
              {STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center ${index === currentStep
                      ? "text-purple-400"
                      : index < currentStep
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${index === currentStep
                      ? "bg-purple-600/20 text-purple-400 border border-purple-500"
                      : index < currentStep
                        ? "bg-green-600/20 text-green-500 border border-green-500"
                        : " text-gray-500 border border-gray-700"
                    }`}>
                    {index < currentStep ? <Check size={16} /> : index + 1}
                  </div>
                  <span className="text-xs text-center">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-background border-gray-800 shadow-lg">
            <CardContent className="p-6">
              {/* Step 1: Business Profile */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="h-6 w-6 text-purple-400" />
                    <h2 className="text-xl font-semibold bg-background">Business Profile</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input
                        id="business-name"
                        placeholder="Acme Inc."
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className=" border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select value={industry} onValueChange={setIndustry}>
                        <SelectTrigger className=" border-gray-700">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="professional-services">Professional Services</SelectItem>
                          <SelectItem value="e-commerce">E-commerce</SelectItem>
                          <SelectItem value="nonprofit">Nonprofit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={timezone} onValueChange={setTimezone}>
                        <SelectTrigger className=" border-gray-700">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pacific">Pacific Time (PT)</SelectItem>
                          <SelectItem value="mountain">Mountain Time (MT)</SelectItem>
                          <SelectItem value="central">Central Time (CT)</SelectItem>
                          <SelectItem value="eastern">Eastern Time (ET)</SelectItem>
                          <SelectItem value="utc">UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Data Upload */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Upload className="h-6 w-6 text-purple-400" />
                    <h2 className="text-xl font-semibold bg-background">Data Upload</h2>
                  </div>

                  <p className="text-gray-400 mb-4">
                    Upload your FAQs, product catalogs, and policies to train your AI assistant.
                  </p>

                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragActive
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-gray-700 /50 hover:"
                      }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">Drag & drop files here, or click to select files</p>
                    <p className="text-gray-500 text-sm">
                      Supports PDF, DOCX, TXT, CSV (Max 10MB per file)
                    </p>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-6">
                      <h3 className="bg-background font-medium mb-3">Uploaded Files ({uploadedFiles.length})</h3>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between  p-3 rounded-md">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-gray-200 text-sm font-medium">{file.name}</p>
                                <p className="text-gray-500 text-xs">{(file.size / 1024).toFixed(1)} KB</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveFile(index)}
                              className="text-gray-400 hover:bg-background"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Template Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="h-6 w-6 text-purple-400" />
                    <h2 className="text-xl font-semibold bg-background">Template Selection</h2>
                  </div>

                  <p className="text-gray-400 mb-4">
                    Choose an industry template to get started quickly. You can customize it later.
                  </p>

                  <RadioGroup value={selectedTemplate} onValueChange={setSelectedTemplate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "restaurant", name: "Restaurant", description: "For cafes, restaurants, and food services" },
                      { id: "retail", name: "Retail Store", description: "For physical retail and product-based businesses" },
                      { id: "real-estate", name: "Real Estate", description: "For property listings and real estate services" },
                      { id: "e-commerce", name: "E-commerce", description: "For online stores and digital products" },
                      { id: "professional", name: "Professional Services", description: "For consultants, lawyers, and service providers" },
                      { id: "nonprofit", name: "Nonprofit", description: "For charities and nonprofit organizations" },
                    ].map((template) => (
                      <div key={template.id} className="relative">
                        <RadioGroupItem
                          value={template.id}
                          id={template.id}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={template.id}
                          className={`flex flex-col h-full p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedTemplate === template.id
                              ? "border-purple-500 bg-purple-500/10"
                              : "border-gray-700  hover:bg-gray-750"
                            }`}
                        >
                          <span className="font-medium bg-background mb-1">{template.name}</span>
                          <span className="text-sm text-gray-400">{template.description}</span>
                          {selectedTemplate === template.id && (
                            <div className="absolute top-3 right-3 h-5 w-5 bg-purple-500 rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 bg-background" />
                            </div>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 4: Widget Customization */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Palette className="h-6 w-6 text-purple-400" />
                    <h2 className="text-xl font-semibold bg-background">Chat Widget Customization</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="widget-color">Widget Color</Label>
                        <div className="flex gap-3">
                          <Input
                            id="widget-color"
                            type="color"
                            value={widgetColor}
                            onChange={(e) => setWidgetColor(e.target.value)}
                            className="w-12 h-10 p-1  border-gray-700"
                          />
                          <Input
                            type="text"
                            value={widgetColor}
                            onChange={(e) => setWidgetColor(e.target.value)}
                            className=" border-gray-700"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="widget-greeting">Greeting Message</Label>
                        <Textarea
                          id="widget-greeting"
                          placeholder="Hi! How can I help you today?"
                          value={widgetGreeting}
                          onChange={(e) => setWidgetGreeting(e.target.value)}
                          className=" border-gray-700 min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Widget Placement</Label>
                        <RadioGroup value={widgetPlacement} onValueChange={setWidgetPlacement} className="grid grid-cols-2 gap-3">
                          <div className="relative">
                            <RadioGroupItem value="bottom-right" id="bottom-right" className="sr-only" />
                            <Label
                              htmlFor="bottom-right"
                              className={`flex items-center justify-center p-3 rounded-md border cursor-pointer transition-all ${widgetPlacement === "bottom-right"
                                  ? "border-purple-500 bg-purple-500/10"
                                  : "border-gray-700 "
                                }`}
                            >
                              Bottom Right
                            </Label>
                          </div>
                          <div className="relative">
                            <RadioGroupItem value="bottom-left" id="bottom-left" className="sr-only" />
                            <Label
                              htmlFor="bottom-left"
                              className={`flex items-center justify-center p-3 rounded-md border cursor-pointer transition-all ${widgetPlacement === "bottom-left"
                                  ? "border-purple-500 bg-purple-500/10"
                                  : "border-gray-700 "
                                }`}
                            >
                              Bottom Left
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="show-confidence" className="cursor-pointer">Show Confidence Tags</Label>
                        <Switch
                          id="show-confidence"
                          checked={showConfidence}
                          onCheckedChange={setShowConfidence}
                        />
                      </div>
                    </div>

                    <div className=" rounded-lg p-4 relative h-[400px] overflow-hidden outline">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-[320px] h-full max-h-[500px] flex flex-col p-3">
                          <ChatWidget
                            color={widgetColor}
                            greeting={widgetGreeting}
                            placement={widgetPlacement}
                            showConfidence={showConfidence}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Test Drive */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="h-6 w-6 text-purple-400" />
                    <h2 className="text-xl font-semibold bg-background">Test Drive</h2>
                  </div>

                  <p className="text-gray-400 mb-4">
                    Try asking questions to see how your AI assistant responds. This will help you understand how your customers will experience it.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className=" rounded-lg p-4">
                        <h3 className="bg-background font-medium mb-3">Suggested Questions</h3>
                        <ul className="space-y-2">
                          <li>
                            <Button
                              variant="ghost"
                              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 justify-start w-full"
                              onClick={() => {
                                setTestQuery("What are your return policies?")
                                setTimeout(() => handleTestQuery(), 100)
                              }}
                            >
                              What are your return policies?
                            </Button>
                          </li>
                          <li>
                            <Button
                              variant="ghost"
                              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 justify-start w-full"
                              onClick={() => {
                                setTestQuery("What are your business hours?")
                                setTimeout(() => handleTestQuery(), 100)
                              }}
                            >
                              What are your business hours?
                            </Button>
                          </li>
                          <li>
                            <Button
                              variant="ghost"
                              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 justify-start w-full"
                              onClick={() => {
                                setTestQuery("How do I track my order?")
                                setTimeout(() => handleTestQuery(), 100)
                              }}
                            >
                              How do I track my order?
                            </Button>
                          </li>
                        </ul>
                      </div>

                      <div className=" rounded-lg p-4">
                        <h3 className="bg-background font-medium mb-3">Test Features</h3>
                        <ul className="space-y-2">
                          <li>
                            <Button
                              variant="ghost"
                              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 justify-start w-full"
                              onClick={handleEscalation}
                            >
                              Test Human Handoff
                            </Button>
                          </li>
                          <li>
                            <Button
                              variant="ghost"
                              className="text-green-400 hover:text-green-300 hover:bg-green-500/10 justify-start w-full"
                              onClick={() => {
                                setTestResponses(prev => [...prev, {
                                  message: "Was this helpful?",
                                  type: "bot"
                                }])
                              }}
                            >
                              Test Post-chat Rating
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className=" rounded-lg flex flex-col h-[400px]">
                      <div className="p-3 border-b border-gray-700 flex items-center">
                        <MessageSquare className="h-5 w-5 text-purple-400 mr-2" />
                        <span className="bg-background font-medium">Chat Simulation</span>
                      </div>

                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {testResponses.length === 0 ? (
                          <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                            <MessageSquare className="h-12 w-12 mb-3 opacity-50" />
                            <p>Try asking a question to see how your AI assistant responds</p>
                          </div>
                        ) : (
                          testResponses.map((response, index) => (
                            <div
                              key={index}
                              className={`flex ${response.type === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-[80%] rounded-lg p-3 ${response.type === "user"
                                    ? "bg-purple-600 bg-background"
                                    : ""
                                  }`}
                              >
                                {response.message}
                                {response.type === "bot" && response.confidence && showConfidence && (
                                  <div className="mt-2 text-xs text-gray-400">
                                    I'm {response.confidence}% sure this is correct!
                                  </div>
                                )}

                                {response.message === "Was this helpful?" && (
                                  <div className="mt-3 flex gap-2">
                                    <Button size="sm" variant="outline" className="h-8 px-2 text-green-400 border-green-500 hover:bg-green-500/10">
                                      <ThumbsUp className="h-4 w-4 mr-1" /> Yes
                                    </Button>
                                    <Button size="sm" variant="outline" className="h-8 px-2 text-red-400 border-red-500 hover:bg-red-500/10">
                                      <ThumbsDown className="h-4 w-4 mr-1" /> No
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      <div className="p-3 border-t border-gray-700">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Type a message..."
                            value={testQuery}
                            onChange={(e) => setTestQuery(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleTestQuery()


                              }
                            }}
                            className=" border-gray-600"
                          />
                          <Button
                            size="icon"
                            onClick={handleTestQuery}
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="border-gray-700 text-gray-300 hover:"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>

                <Button
                  onClick={handleNext}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {currentStep === STEPS.length - 1 ? (
                    <>
                      Complete Setup
                      <Check className="h-4 w-4 ml-2" />
                    </>
                  ) : (
                    <>
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
