import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  members: {
    type: Number,
    default: 0
  },
  groupDescription: {
    type: String,
    required: true
  },
  goals: {
    type: String,
    required: true
  },
  groupFor: {
    type: String,
    required: true
  },
  topics: {
    type: String,
    required: true
  },
  groupFocus: {
    name: {
      type: String,
      default: "Group Focus"
    },
    points: [{
      heading: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }]
  },
  whoCanJoin: [{
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }],
  meetingStructure: {
    weeklyDiscussions: {
      type: String,
      required: true
    },
    expertSessions: {
      type: String,
      required: true
    }
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  image_url: {
    type: String,
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Admin'  // Reference to Admin model if you have one
  },
  members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Member'  
  }]
}, { timestamps: true });

// Add indexes for better query performance
GroupSchema.index({ title: 'text', description: 'text' });

GroupSchema.methods.addMember = function(userId) {
  if (!this.members.includes(userId)) {
    this.members.push(userId);
  }
  return this.save();
};

GroupSchema.statics.findPublicGroups = function() {
  return this.find({ isPublic: true });
};

export const Group = mongoose.model('Group', GroupSchema);