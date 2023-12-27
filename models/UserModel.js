import mongoose from "mongoose";

const User = mongoose.Schema({
    judul:{
        type:String,
        required:true
    },
    penulis:{
        type:String,
        required:true
    },
    penerbit:{
        type:String,
        required:true
    },
    tahun_terbit:{
        type:String,
        required:true
    },
    jumlah_halaman:{
        type:String,
        required:true
    },
    harga:{
        type:Number,
        required:true
    },
    kategori:{
        type:String,
        required:true
    },
    Rating:{
        type:Number,
        required:true
    }
});

export default mongoose.model('Users',User);