import { Search, MapPin, Building2, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchFilter = () => {
  return (
    <section className="py-12 -mt-16 relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search companies..."
                className="pl-10 h-12 bg-secondary border-border"
              />
            </div>

            <Select>
              <SelectTrigger className="h-12 bg-secondary border-border">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-muted-foreground" />
                  <SelectValue placeholder="Type of Construction" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 bg-secondary border-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <SelectValue placeholder="Location" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Kuwait</SelectItem>
                <SelectItem value="kuwait-city">Kuwait City</SelectItem>
                <SelectItem value="salmiya">Salmiya</SelectItem>
                <SelectItem value="hawally">Hawally</SelectItem>
                <SelectItem value="shuwaikh">Shuwaikh</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 text-primary-foreground">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
