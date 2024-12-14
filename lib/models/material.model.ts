import mongoose, {Schema, Document} from "mongoose";

interface IMaterial extends Document{
    resourceCode: string, 
    name: string, 
    content: string,
}

const materialSchema = new Schema<IMaterial>({
    resourceCode: {
        type: String,
        unique: true,
      },
    name: {
        type: String,
        required: true, 
    }, 
    content: {
        type: String, 
        enum: ["markdown", "plain_text", "url"],
    }
    
})

const Material = mongoose.models.Material || mongoose.model("Material", materialSchema);

export default Material;