import { useState } from "react";
import { ArrowLeft, Globe, FileText, User, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const VisaBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fromCountry: '',
    toCountry: '',
    visaType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passportNumber: '',
    dateOfBirth: ''
  });

  const visaTypes = [
    "Tourist Visa",
    "Business Visa", 
    "Student Visa",
    "Work Visa",
    "Transit Visa"
  ];

  const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany",
    "France", "Japan", "Singapore", "UAE", "Netherlands", "India", "China"
  ];

  const requiredDocuments = [
    "Valid Passport (minimum 6 months validity)",
    "Passport-size photographs (2 copies)",
    "Completed visa application form",
    "Proof of travel insurance",
    "Bank statements (last 3 months)",
    "Hotel booking confirmation",
    "Flight itinerary",
    "Employment letter (if applicable)"
  ];

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Visa Application</h1>
          <p className="text-muted-foreground">Complete your visa application in a few simple steps</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Step {currentStep} of 4</span>
            <span className="text-sm font-medium text-muted-foreground">{Math.round((currentStep / 4) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="gradient-sky h-2 rounded-full transition-smooth"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step 1: Country Selection */}
          {currentStep === 1 && (
            <Card className="card-travel p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="gradient-sky p-3 rounded-full w-fit mx-auto">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Select Countries</h2>
                  <p className="text-muted-foreground">Choose your departure and destination countries</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fromCountry">From Country (Your Nationality)</Label>
                    <Select value={formData.fromCountry} onValueChange={(value) => setFormData({...formData, fromCountry: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="toCountry">To Country (Destination)</Label>
                    <Select value={formData.toCountry} onValueChange={(value) => setFormData({...formData, toCountry: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={nextStep} 
                  className="btn-travel w-full"
                  disabled={!formData.fromCountry || !formData.toCountry}
                >
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Visa Type */}
          {currentStep === 2 && (
            <Card className="card-travel p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="gradient-sky p-3 rounded-full w-fit mx-auto">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Visa Type</h2>
                  <p className="text-muted-foreground">Select the type of visa you need</p>
                </div>

                <div className="space-y-3">
                  {visaTypes.map((type) => (
                    <div 
                      key={type}
                      className={`p-4 border rounded-lg cursor-pointer transition-smooth ${
                        formData.visaType === type 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setFormData({...formData, visaType: type})}
                    >
                      <div className="font-medium">{type}</div>
                      <div className="text-sm text-muted-foreground">
                        {type.includes('Tourist') && "For leisure and tourism purposes"}
                        {type.includes('Business') && "For business meetings and conferences"}
                        {type.includes('Student') && "For educational purposes and studies"}
                        {type.includes('Work') && "For employment and work purposes"}
                        {type.includes('Transit') && "For connecting flights and short stays"}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button onClick={prevStep} variant="outline" className="flex-1">
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="btn-travel flex-1"
                    disabled={!formData.visaType}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Personal Information */}
          {currentStep === 3 && (
            <Card className="card-travel p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="gradient-sky p-3 rounded-full w-fit mx-auto">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Personal Information</h2>
                  <p className="text-muted-foreground">Fill in your personal details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Enter last name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="passportNumber">Passport Number</Label>
                    <Input 
                      id="passportNumber"
                      value={formData.passportNumber}
                      onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
                      placeholder="Enter passport number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input 
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={prevStep} variant="outline" className="flex-1">
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="btn-travel flex-1"
                    disabled={!formData.firstName || !formData.lastName || !formData.email}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Step 4: Documents & Submit */}
          {currentStep === 4 && (
            <Card className="card-travel p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="gradient-sky p-3 rounded-full w-fit mx-auto">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Required Documents</h2>
                  <p className="text-muted-foreground">Upload your documents to complete the application</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Document Checklist:</h3>
                  <div className="space-y-2">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Upload Documents</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
                    <p className="text-sm text-muted-foreground">Support: PDF, JPG, PNG (Max 10MB)</p>
                    <Button variant="outline" className="mt-4">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-accent-foreground mb-2">Processing Timeline</h4>
                  <p className="text-sm text-muted-foreground">
                    Your visa application will be processed within <strong>3-5 working days</strong>. 
                    You'll receive email updates on the status of your application.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button onClick={prevStep} variant="outline" className="flex-1">
                    Back
                  </Button>
                  <Button className="btn-travel flex-1">
                    Submit Application
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaBooking;